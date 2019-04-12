{
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "editor.fontSize": 15,
  "editor.lineHeight": 35,
  "editor.quickSuggestionsDelay": 30,
  "editor.letterSpacing": 0.5,
  "workbench.editor.tabSizing": "shrink",
  "html.format.enable": true,
  "html.format.preserveNewLines": true,
  "files.trimTrailingWhitespace": true,
  "editor.tabSize": 2,
  "editor.cursorWidth": 3,
  // this isn't really underline but we hack it to be a thicker cursor
  "editor.cursorStyle": "line",
  "editor.wordWrap": "on",
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.fontWeight": "400",
  "editor.cursorBlinking": "solid",
  "editor.minimap.enabled": true,
  "workbench.sideBar.location": "left",
  "editor.renderWhitespace": "none",
  "editor.rulers": [
    80,
    100
  ],
  "editor.minimap.showSlider": "always",
  "workbench.startupEditor": "newUntitledFile",
  "extensions.ignoreRecommendations": false,
  // Exclude the following files from the file explorer
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/.next": true
  },
  "workbench.colorTheme": "Cobalt2",
  "workbench.editor.tabCloseButton": "off",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  // show snippets before any other auto completion
  "editor.snippetSuggestions": "top",
  "window.title": "${dirty} ${activeEditorMedium}${separator}${rootName}",
  // AUTO-SAVE Config
  "editor.formatOnSave": true,
  // turn it off for JS
  "[javascript]": {
    "editor.formatOnSave": false
  },
  // tell the ESLint plugin to run on save
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "editor.autoIndent": true,
  "editor.detectIndentation": false,
  "files.insertFinalNewline": true,
  "editor.showFoldingControls": "always",
  "editor.find.seedSearchStringFromSelection": true,
  "editor.matchBrackets": true,
  "workbench.editor.enablePreview": true,
  "editor.scrollBeyondLastLine": true,
  "editor.useTabStops": true,
  "editor.formatOnPaste": true,
  "window.zoomLevel": 0,
  "editor.parameterHints.enabled": false,
  "terminal.integrated.fontFamily": "Fira Code",
}
