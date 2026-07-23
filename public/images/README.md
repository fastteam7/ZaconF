# Imagens do Site ZACON

## Estrutura de Diretórios

```
public/images/
├── team/           # Fotos dos profissionais
├── office/         # Fotos do escritório
├── certificates/   # Certificados e selos
└── blog/           # Imagens de capa dos artigos
```

## Convenções de Nomenclatura

### Team (Equipe)
- `jucelia-alves-de-lima.webp` - Foto profissional
- `luciane-moraes.webp`
- `heloisa-pinheiro-ventura.webp`
- `mario-torres.webp`
- `adriano-schneider.webp`
- `equipe-zacon.webp` - Foto coletiva da equipe

### Office (Escritório)
- `escritorio-zacon-fachada.webp` - Fachada do escritório
- `escritorio-zacon-recepcao.webp` - Recepção
- `escritorio-zacon-sala-reuniao.webp` - Sala de reunião
- `escritorio-zacon-ambiente.webp` - Ambiente de trabalho

### Certificates (Certificados)
- `crc-sc-jucelia.webp` - Certificado CRC/SC da Jucélia
- `selo-cfc.webp` - Selo do Conselho Federal de Contabilidade

### Blog (Artigos)
- `{slug-do-artigo}.webp` - Imagem de capa do artigo
- Exemplo: `como-abrir-empresa-florianopolis.webp`

## Especificações Técnicas

### Formatos
- **Preferido:** WebP (melhor compressão)
- **Fallback:** AVIF (suporte crescente)
- **Legado:** JPG/PNG (apenas se necessário)

### Dimensões Recomendadas

| Tipo | Dimensão | Uso |
|------|----------|-----|
| Avatar profissional | 400x400px | Cards de equipe |
| Foto equipe | 1200x800px | Seção institucional |
| Escritório | 1920x1080px | Hero sections |
| Blog cover | 1200x630px | OG Image / Cards |
| Certificado | 800x600px | Seção credenciais |

### Otimização
- Compressão: 80-85% qualidade
- Lazy loading: habilitado automaticamente via next/image
- Placeholder: blur (gerado automaticamente)

## Como Adicionar Novas Imagens

1. Salve a imagem no diretório apropriado
2. Use formato WebP
3. Siga a nomenclatura (kebab-case, sem acentos)
4. Atualize o componente correspondente se necessário
