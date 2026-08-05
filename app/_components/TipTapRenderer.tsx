"use client";

import Image from "next/image";
import Link from "next/link";
import { getCMSMediaUrl, type TipTapNode, type TipTapContent } from "@/lib/cms";
import { cn } from "@/lib/utils";

interface TipTapRendererProps {
  content: TipTapContent;
  className?: string;
}

export function TipTapRenderer({ content, className }: TipTapRendererProps) {
  if (!content?.content) return null;

  return (
    <div className={cn("prose prose-lg max-w-none prose-blue", className)}>
      {content.content.map((node, index) => (
        <RenderNode key={index} node={node} />
      ))}
    </div>
  );
}

function RenderNode({ node }: { node: TipTapNode }) {
  switch (node.type) {
    case "paragraph":
      if (!node.content || node.content.length === 0) {
        return <p>&nbsp;</p>;
      }
      return (
        <p>
          {node.content?.map((child, i) => (
            <RenderNode key={i} node={child} />
          ))}
        </p>
      );

    case "heading": {
      const level = (node.attrs?.level as number) || 2;
      const id = node.attrs?.id as string | undefined;
      const children = node.content?.map((child, i) => (
        <RenderNode key={i} node={child} />
      ));

      switch (level) {
        case 1:
          return <h1 id={id}>{children}</h1>;
        case 2:
          return <h2 id={id}>{children}</h2>;
        case 3:
          return <h3 id={id}>{children}</h3>;
        case 4:
          return <h4 id={id}>{children}</h4>;
        case 5:
          return <h5 id={id}>{children}</h5>;
        case 6:
          return <h6 id={id}>{children}</h6>;
        default:
          return <h2 id={id}>{children}</h2>;
      }
    }

    case "text": {
      let text: React.ReactNode = node.text;

      node.marks?.forEach((mark) => {
        switch (mark.type) {
          case "bold":
            text = <strong>{text}</strong>;
            break;
          case "italic":
            text = <em>{text}</em>;
            break;
          case "underline":
            text = <u>{text}</u>;
            break;
          case "strike":
            text = <s>{text}</s>;
            break;
          case "code":
            text = (
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-slate-800">
                {text}
              </code>
            );
            break;
          case "link":
            text = (
              <Link
                href={(mark.attrs?.href as string) || "#"}
                target={mark.attrs?.target as string | undefined}
                rel={
                  mark.attrs?.target === "_blank"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-blue-700 hover:text-blue-900 underline decoration-blue-300 hover:decoration-blue-600 transition-colors"
              >
                {text}
              </Link>
            );
            break;
          case "highlight":
            text = (
              <mark
                style={{
                  backgroundColor: (mark.attrs?.color as string) || "#fef08a",
                }}
                className="px-0.5 rounded"
              >
                {text}
              </mark>
            );
            break;
          case "textStyle":
            text = (
              <span style={{ color: mark.attrs?.color as string | undefined }}>
                {text}
              </span>
            );
            break;
          case "subscript":
            text = <sub>{text}</sub>;
            break;
          case "superscript":
            text = <sup>{text}</sup>;
            break;
        }
      });

      return <>{text}</>;
    }

    case "bulletList":
      return (
        <ul className="list-disc pl-6 space-y-2">
          {node.content?.map((child, i) => (
            <RenderNode key={i} node={child} />
          ))}
        </ul>
      );

    case "orderedList":
      return (
        <ol
          start={node.attrs?.start as number | undefined}
          className="list-decimal pl-6 space-y-2"
        >
          {node.content?.map((child, i) => (
            <RenderNode key={i} node={child} />
          ))}
        </ol>
      );

    case "listItem":
      return (
        <li>
          {node.content?.map((child, i) => (
            <RenderNode key={i} node={child} />
          ))}
        </li>
      );

    case "taskList":
      return (
        <ul className="list-none pl-0 space-y-2">
          {node.content?.map((child, i) => (
            <RenderNode key={i} node={child} />
          ))}
        </ul>
      );

    case "taskItem":
      return (
        <li className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={node.attrs?.checked as boolean}
            readOnly
            className="mt-1.5 h-4 w-4 rounded border-gray-300"
          />
          <div>
            {node.content?.map((child, i) => (
              <RenderNode key={i} node={child} />
            ))}
          </div>
        </li>
      );

    case "blockquote":
      return (
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 my-6">
          {node.content?.map((child, i) => (
            <RenderNode key={i} node={child} />
          ))}
        </blockquote>
      );

    case "codeBlock": {
      const language = (node.attrs?.language as string) || "plaintext";
      const code = node.content?.map((child) => child.text).join("") || "";

      return (
        <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto my-6">
          <code className={`language-${language} text-sm font-mono`}>
            {code}
          </code>
        </pre>
      );
    }

    case "image": {
      const src = getCMSMediaUrl(node.attrs?.src as string);
      if (!src) return null;

      const alt = (node.attrs?.alt as string) || "";
      const title = node.attrs?.title as string | undefined;
      const width = (node.attrs?.width as number) || 800;
      const height = (node.attrs?.height as number) || 600;

      return (
        <figure className="my-8">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded-lg w-full h-auto"
          />
          {title && (
            <figcaption className="text-center text-sm text-gray-600 mt-2">
              {title}
            </figcaption>
          )}
        </figure>
      );
    }

    case "youtube": {
      const videoId = node.attrs?.src as string;
      const width = (node.attrs?.width as string) || "100%";
      const height = (node.attrs?.height as number) || 400;

      return (
        <div className="aspect-video my-8">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            width={width}
            height={height}
            allowFullScreen
            className="w-full h-full rounded-lg"
            title="YouTube video"
          />
        </div>
      );
    }

    case "iframe": {
      const src = node.attrs?.src as string;
      return (
        <div className="aspect-video my-8">
          <iframe
            src={src}
            className="w-full h-full rounded-lg border-0"
            allowFullScreen
            title="Embedded content"
          />
        </div>
      );
    }

    case "table":
      return (
        <div className="overflow-x-auto my-8">
          <table className="min-w-full border-collapse border border-gray-200">
            <tbody>
              {node.content?.map((child, i) => (
                <RenderNode key={i} node={child} />
              ))}
            </tbody>
          </table>
        </div>
      );

    case "tableRow":
      return (
        <tr className="border-b border-gray-200">
          {node.content?.map((child, i) => (
            <RenderNode key={i} node={child} />
          ))}
        </tr>
      );

    case "tableCell":
      return (
        <td
          colSpan={node.attrs?.colspan as number | undefined}
          rowSpan={node.attrs?.rowspan as number | undefined}
          className="border border-gray-200 px-4 py-2"
        >
          {node.content?.map((child, i) => (
            <RenderNode key={i} node={child} />
          ))}
        </td>
      );

    case "tableHeader":
      return (
        <th
          colSpan={node.attrs?.colspan as number | undefined}
          rowSpan={node.attrs?.rowspan as number | undefined}
          className="border border-gray-200 px-4 py-2 bg-gray-50 font-semibold text-left"
        >
          {node.content?.map((child, i) => (
            <RenderNode key={i} node={child} />
          ))}
        </th>
      );

    case "horizontalRule":
      return <hr className="my-8 border-t-2 border-gray-200" />;

    case "hardBreak":
      return <br />;

    // Extensões customizadas do CMS FastTeam
    case "alert": {
      const alertType = (node.attrs?.type as string) || "info";
      const alertStyles: Record<string, string> = {
        info: "bg-blue-50 border-blue-500 text-blue-800",
        warning: "bg-yellow-50 border-yellow-500 text-yellow-800",
        error: "bg-red-50 border-red-500 text-red-800",
        success: "bg-green-50 border-green-500 text-green-800",
      };

      return (
        <div
          className={cn(
            "p-4 rounded-lg border-l-4 my-6",
            alertStyles[alertType] || alertStyles.info
          )}
        >
          {node.content?.map((child, i) => (
            <RenderNode key={i} node={child} />
          ))}
        </div>
      );
    }

    case "callout": {
      const emoji = node.attrs?.emoji as string | undefined;
      return (
        <div className="p-4 border-l-4 border-blue-500 bg-blue-50 my-6 rounded-r-lg">
          {emoji && <span className="mr-2">{emoji}</span>}
          {node.content?.map((child, i) => (
            <RenderNode key={i} node={child} />
          ))}
        </div>
      );
    }

    case "accordion": {
      const title = (node.attrs?.title as string) || "Clique para expandir";
      return (
        <details className="my-4 border border-gray-200 rounded-lg overflow-hidden">
          <summary className="cursor-pointer font-semibold p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
            {title}
          </summary>
          <div className="p-4 border-t border-gray-200">
            {node.content?.map((child, i) => (
              <RenderNode key={i} node={child} />
            ))}
          </div>
        </details>
      );
    }

    case "faq": {
      const question = node.attrs?.question as string;
      return (
        <div className="my-4 border border-gray-200 rounded-lg overflow-hidden">
          <h4 className="font-semibold p-4 bg-gray-50">{question}</h4>
          <div className="p-4 border-t border-gray-200">
            {node.content?.map((child, i) => (
              <RenderNode key={i} node={child} />
            ))}
          </div>
        </div>
      );
    }

    case "cta": {
      const title = node.attrs?.title as string;
      const description = node.attrs?.description as string | undefined;
      const buttonText = (node.attrs?.buttonText as string) || "Saiba mais";
      const buttonUrl = (node.attrs?.buttonUrl as string) || "#";

      return (
        <div className="text-center p-8 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-xl my-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          {description && <p className="mb-6 text-blue-100">{description}</p>}
          <Link
            href={buttonUrl}
            className="inline-block px-8 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md"
          >
            {buttonText}
          </Link>
        </div>
      );
    }

    case "steps":
      return (
        <ol className="list-none p-0 space-y-4 my-6">
          {node.content?.map((child, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm font-semibold">
                {i + 1}
              </span>
              <div className="flex-1 pt-0.5">
                <RenderNode node={child} />
              </div>
            </li>
          ))}
        </ol>
      );

    case "columns": {
      const count = (node.attrs?.count as number) || 2;
      return (
        <div
          className="grid gap-6 my-6"
          style={{
            gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))`,
          }}
        >
          {node.content?.map((child, i) => (
            <div key={i}>
              <RenderNode node={child} />
            </div>
          ))}
        </div>
      );
    }

    case "column":
      return (
        <>
          {node.content?.map((child, i) => (
            <RenderNode key={i} node={child} />
          ))}
        </>
      );

    case "stats": {
      const items = node.attrs?.items as Array<{
        value: string;
        label: string;
        trend?: "up" | "down" | "neutral";
      }>;

      if (!items) return null;

      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 p-6 bg-gray-50 rounded-xl">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-blue-700">
                {item.value}
              </div>
              <div className="text-sm text-gray-600 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      );
    }

    case "embed": {
      const html = node.attrs?.html as string;
      if (!html) return null;

      return (
        <div
          className="my-8"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }

    case "details":
      return (
        <details className="my-4">
          <summary className="cursor-pointer font-semibold">
            {node.attrs?.summary as string}
          </summary>
          <div className="mt-2 pl-4">
            {node.content?.map((child, i) => (
              <RenderNode key={i} node={child} />
            ))}
          </div>
        </details>
      );

    default:
      // Renderizar conteúdo filho se existir para tipos desconhecidos
      if (node.content) {
        return (
          <>
            {node.content.map((child, i) => (
              <RenderNode key={i} node={child} />
            ))}
          </>
        );
      }
      return null;
  }
}

export default TipTapRenderer;
