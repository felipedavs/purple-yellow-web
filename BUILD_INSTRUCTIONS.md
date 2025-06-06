
# Instruções para Corrigir o Build

Para gerar o código HTML do site, você precisa primeiro adicionar um script ao arquivo `package.json`.

## Passo a passo:

1. Abra o arquivo `package.json` na raiz do projeto
2. Localize a seção `"scripts"` 
3. Adicione a seguinte linha dentro da seção scripts:

```json
"build:dev": "vite build --mode development"
```

A seção scripts deve ficar assim:
```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "build:dev": "vite build --mode development",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

4. Salve o arquivo
5. Execute o comando: `npm run build:dev`
6. O HTML será gerado na pasta `dist/`

## Alternativa - Para visualizar o HTML renderizado:

1. Execute: `npm run dev`
2. Abra o navegador em `http://localhost:8080`
3. Pressione F12 para abrir as ferramentas de desenvolvedor
4. Vá para a aba "Elements" para ver o HTML completo gerado
5. Clique com botão direito no elemento `<html>` e selecione "Edit as HTML" ou "Copy outerHTML"

Após seguir essas instruções, o projeto poderá ser construído corretamente e você terá acesso ao código HTML completo.
