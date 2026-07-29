# Lista de Imagens Necessárias - ZACON Contabilidade

Este documento lista todas as imagens que precisam ser fornecidas para completar o site.

## Resumo

| Categoria | Quantidade | Prioridade |
|-----------|------------|------------|
| Equipe (avatares) | 5 | Alta |
| Equipe (coletiva) | 1 | Alta |
| Escritório | 3-4 | Média |
| Certificados | 2 | Média |
| Blog (opcional) | 10 | Baixa |

---

## 1. FOTOS DA EQUIPE (Prioridade ALTA)

### 1.1 Avatares Individuais (400x400px)

| Arquivo | Pessoa | Especificações |
|---------|--------|----------------|
| `jucelia-alves-de-lima.webp` | Jucélia Alves de Lima | Foto profissional, fundo neutro, rosto centralizado |
| `luciane-moraes.webp` | Luciane Moraes | Foto profissional, fundo neutro, rosto centralizado |
| `heloisa-pinheiro-ventura.webp` | Heloisa Pinheiro Ventura | Foto profissional, fundo neutro, rosto centralizado |
| `mario-torres.webp` | Mario Torres | Foto profissional, fundo neutro, rosto centralizado |
| `adriano-schneider.webp` | Adriano Schneider | Foto profissional, fundo neutro, rosto centralizado |

**Especificações técnicas:**
- Dimensão: 400x400 pixels (quadrado)
- Formato: WebP (preferencial) ou JPG
- Compressão: 80-85% qualidade
- Tamanho máximo: 100KB por imagem
- Iluminação: Boa iluminação no rosto
- Enquadramento: Do peito para cima, rosto centralizado

### 1.2 Foto da Equipe Coletiva (1200x800px)

| Arquivo | Descrição |
|---------|-----------|
| `equipe-zacon.webp` | Foto de toda a equipe reunida |

**Especificações:**
- Dimensão: 1200x800 pixels
- Formato: WebP ou JPG
- Ambiente: No escritório ou área externa profissional
- Composição: Todos os 5 profissionais visíveis
- Alt text sugerido: "Equipe completa da ZACON Contabilidade em Ingleses, Florianópolis"

---

## 2. FOTOS DO ESCRITÓRIO (Prioridade MÉDIA)

| Arquivo | Descrição | Dimensão |
|---------|-----------|----------|
| `escritorio-zacon-fachada.webp` | Fachada externa do escritório | 1920x1080px |
| `escritorio-zacon-recepcao.webp` | Área de recepção | 1200x800px |
| `escritorio-zacon-sala-reuniao.webp` | Sala de reunião | 1200x800px |
| `escritorio-zacon-ambiente.webp` | Ambiente de trabalho geral | 1200x800px |

**Especificações:**
- Formato: WebP ou JPG
- Iluminação: Natural preferível, ou boa iluminação artificial
- Qualidade: Alta resolução, sem granulação
- Organização: Ambiente limpo e organizado

**Endereço para referência:**
Rod. Armando Calil Bulos, 5785 - Ingleses do Rio Vermelho, Florianópolis/SC

---

## 3. CERTIFICADOS E CREDENCIAIS (Prioridade MÉDIA)

| Arquivo | Descrição | Dimensão |
|---------|-----------|----------|
| `crc-sc-jucelia.webp` | Certificado CRC/SC da Jucélia | 800x600px |
| `selo-cfc.webp` | Selo do Conselho Federal de Contabilidade | 400x400px |

**Especificações:**
- Formato: WebP ou PNG (se precisar transparência)
- Resolução: Legível, texto claro
- Se for digitalização, usar scanner de alta qualidade
- Remover informações sensíveis se necessário

---

## 4. IMAGENS DO BLOG (Prioridade BAIXA - Opcional)

As OG images são geradas automaticamente, mas imagens personalizadas podem melhorar o engajamento.

| Arquivo | Artigo |
|---------|--------|
| `como-abrir-empresa-florianopolis.webp` | Como Abrir uma Empresa em Florianópolis |
| `mei-tudo-que-voce-precisa-saber.webp` | MEI em 2024: Guia Completo |
| `planejamento-tributario-como-pagar-menos-impostos.webp` | Planejamento Tributário |
| `imposto-de-renda-2024-guia-completo.webp` | Imposto de Renda 2024 |
| `contabilidade-para-medicos-guia-completo.webp` | Contabilidade para Médicos |
| `simples-nacional-lucro-presumido-qual-melhor.webp` | Simples Nacional ou Lucro Presumido |
| `esocial-2024-guia-para-empresas.webp` | eSocial 2024 |
| `bpo-financeiro-o-que-e-vantagens.webp` | BPO Financeiro |
| `contabilidade-florianopolis-como-escolher-contador.webp` | Como Escolher um Contador |
| `regularizacao-cnpj-como-resolver-pendencias.webp` | Regularização de CNPJ |

**Especificações para blog:**
- Dimensão: 1200x630px (padrão OG image)
- Formato: WebP ou JPG
- Estilo: Consistente com a identidade visual ZACON

---

## Estrutura de Pastas

Após obter as imagens, salve-as em:

```
public/images/
├── team/
│   ├── jucelia-alves-de-lima.webp
│   ├── luciane-moraes.webp
│   ├── heloisa-pinheiro-ventura.webp
│   ├── mario-torres.webp
│   ├── adriano-schneider.webp
│   └── equipe-zacon.webp
├── office/
│   ├── escritorio-zacon-fachada.webp
│   ├── escritorio-zacon-recepcao.webp
│   ├── escritorio-zacon-sala-reuniao.webp
│   └── escritorio-zacon-ambiente.webp
├── certificates/
│   ├── crc-sc-jucelia.webp
│   └── selo-cfc.webp
└── blog/
    ├── como-abrir-empresa-florianopolis.webp
    └── ... (demais artigos)
```

---

## Ferramentas Recomendadas para Conversão

### Conversão para WebP:
- **Online:** Squoosh (https://squoosh.app)
- **CLI:** `cwebp -q 85 input.jpg -o output.webp`
- **Photoshop:** Export As > WebP

### Redimensionamento:
- **Online:** Squoosh, TinyPNG
- **CLI:** ImageMagick (`convert -resize 400x400 input.jpg output.webp`)

### Compressão:
- Meta: < 100KB por avatar, < 300KB por foto grande
- Qualidade: 80-85% é o sweet spot

---

## Checklist de Implementação

Após fornecer as imagens:

- [ ] Salvar imagens na estrutura de pastas correta
- [ ] Remover arquivos placeholder (`placeholder-*.svg`)
- [ ] Atualizar caminhos nos componentes:
  - [ ] `app/page.tsx` (array `partners`)
  - [ ] `app/sobre/page.tsx` (array `partners` e seção de certificados)
- [ ] Rodar `npm run build` para verificar otimização
- [ ] Testar no navegador (lazy loading, alt text)

---

## Contato para Dúvidas

Se tiver dúvidas sobre especificações ou formato, as imagens podem ser enviadas em qualquer formato de alta qualidade (JPG, PNG, HEIC) que serão convertidas durante o processo de implementação.
