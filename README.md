<div align="center">

# 🔥 Oh My OpenCode - GLM 4.7 Edition

**Fork optimisé pour GLM 4.7 de Z AI**

[![Oh My OpenCode](./.github/assets/hero.jpg)](https://github.com/uglyswap/oh-my-opencode)

---

> **⚠️ NOTE**: Ceci est un fork du projet original [code-yeongyu/oh-my-opencode](https://github.com/code-yeongyu/oh-my-opencode), **optimisé pour fonctionner exclusivement avec GLM 4.7 de Z AI**.
>
> Tous les agents utilisent maintenant **GLM 4.7** par défaut au lieu des modèles multi-fournisseurs d'origine.

---

</div>

## 📋 Qu'est-ce que Oh My OpenCode ?

**Oh My OpenCode** est un plugin de production pour OpenCode qui transforme les agents IA en une équipe de développement disciplinée et orchestrée.

**Ce fork GLM 4.7** offre:
- ✅ Tous les agents configurés pour **GLM 4.7** par défaut
- ✅ Système de hooks puissant (todo continuation, session recovery, etc.)
- ✅ Outils LSP complets (rename, code actions, diagnostics...)
- ✅ Background agents pour parallélisation
- ✅ MCPs intégrés (context7, websearch, grep.app)
- ✅ Compatibilité Claude Code

## 🚀 Installation Rapide

### Prérequis
- **OpenCode 1.0.150+** installé
- **Compte Z AI** avec API key (disponible sur https://open.bigmodel.cn/)

### Étape 1: Installer OpenCode

```bash
# Via script d'installation (recommandé)
curl -fsSL https://opencode.ai/install | bash

# OU via npm
npm install -g opencode-ai
```

### Étape 2: Configurer l'authentification Z AI

```bash
# Lancer OpenCode
opencode

# Dans OpenCode, utiliser la commande:
/models

# Puis sélectionner "GLM-4.7" comme modèle
```

**Authentification automatique:**

OpenCode vous demandera de vous authentifier. Sélectionnez **Z.AI**:

```bash
opencode auth login

# Sélectionner: Z.AI
# Entrer votre API key Z AI
```

Si vous avez le **GLM Coding Plan**, sélectionnez **Z.AI Coding Plan**.

### Étape 3: Installer le plugin Oh My OpenCode

```bash
# Option 1: Depuis npm (après publication)
npm install oh-my-opencode

# Option 2: En local depuis ce fork
git clone https://github.com/uglyswap/oh-my-opencode.git
cd oh-my-opencode
bun install
bun run build

# Configurer le plugin dans OpenCode
# ~/.config/opencode/opencode.json:
{
  "plugin": [
    "oh-my-opencode"
  ]
}
```

### Configuration du Plugin (optionnel)

Créez `~/.config/opencode/oh-my-opencode.json`:

```jsonc
{
  // Tous les agents utilisent déjà GLM 4.7 par défaut
  // Aucune configuration supplémentaire nécessaire !

  // Si vous voulez désactiver certains hooks:
  // "disabled_hooks": ["comment-checker", "agent-usage-reminder"],

  // Si vous voulez désactiver certains MCPs:
  // "disabled_mcps": ["context7", "websearch_exa", "grep_app"],
}
```

### ⚠️ IMPORTANT: Variable d'environnement Z AI

Ce fork inclut les **4 MCP servers Z AI** qui nécessitent votre clé API:

**MCPs Z AI inclus:**
- `zai-vision` - Analyse multimodale (images, PDFs, diagrammes)
- `web-search-prime` - Recherche web optimisée
- `web-reader` - Lecture de pages web
- `zread` - Recherche dans dépôts GitHub

**Configuration requise:**

Définissez la variable d'environnement `Z_AI_API_KEY` avec votre clé Z AI:

```bash
# Linux/macOS
export Z_AI_API_KEY="votre_cle_api_zai_ici"

# Windows PowerShell
$env:Z_AI_API_KEY="votre_cle_api_zai_ici"

# Windows CMD
set Z_AI_API_KEY=votre_cle_api_zai_ici
```

**Pour rendre la variable permanente:**

```bash
# Ajouter à ~/.bashrc ou ~/.zshrc (Linux/macOS)
echo 'export Z_AI_API_KEY="votre_cle_api_zai_ici"' >> ~/.bashrc
source ~/.bashrc

# OU ajouter aux variables d'environnement Windows
# Panneau de configuration → Système → Avancé → Variables d'environnement
```

**⚠️ SÉCURITÉ**: Ne JAMAIS commit votre clé API dans git !

## 🤖 Agents Disponibles

| Agent | Modèle (Défaut) | Rôle |
|-------|----------------|------|
| **Sisyphus** | `glm/glm-4.7` | Orchestrateur principal - planifie, délègue, exécute |
| **Oracle** | `glm/glm-4.7` | Architecture, debugging, revue de code |
| **Librarian** | `glm/glm-4.7` | Recherche docs officielles, exemples OSS |
| **Explore** | `glm/glm-4.7` | Exploration codebase rapide |
| **Frontend UI/UX** | `glm/glm-4.7` | Développement frontend/design |
| **Document Writer** | `glm/glm-4.7` | Rédaction technique/documentation |
| **Multimodal Looker** | `glm/glm-4.7` | Analyse PDFs, images, diagrammes |

## 🎯 Fonctionnalités Principales

### 1. Todo Continuation Enforcer
Force l'agent à continuer si des todos sont inachevés. Plus jamais d'agents qui abandonnent à mi-chemin !

### 2. Background Agents
Lancez des tâches en parallèle sans bloquer le workflow principal:
```typescript
// Recherche parallèle en arrière-plan
background_task(agent="explore", prompt="Trouve les implémentations d'auth...")
background_task(agent="librarian", prompt="Cherche les best practices JWT...")
// Continuez à travailler, récupérez les résultats plus tard
```

### 3. Outils LSP
Donnez aux agents les mêmes outils que vous:
- `lsp_rename` - Renommage workspace
- `lsp_code_actions` - Quick fixes/refactorings
- `lsp_diagnostics` - Erreurs avant build
- Et 8 autres outils LSP...

### 4. Session Recovery
Récupération automatique des erreurs de session. Plus de sessions crashées !

### 5. MCPs Intégrés

**MCPs Original:**
- **context7** - Documentation officielle librairies
- **websearch_exa** - Web search temps réel via Exa AI
- **grep_app** - Recherche code GitHub publique

**MCPs Z AI (nécessitent `Z_AI_API_KEY`):**
- **zai-vision** - Analyse multimodale (images, PDFs, diagrammes)
- **web-search-prime** - Recherche web optimisée Z AI
- **web-reader** - Lecture de pages web
- **zread** - Recherche dans dépôts GitHub

## 📖 Utilisation

### Démarrer avec Sisyphus

```
opencode
```

Sisyphus est maintenant l'agent par défaut. Il va:
1. Analyser votre demande
2. Créer une todolist détaillée
3. Déléguer aux agents spécialisés si nécessaire
4. Travailler en parallèle avec background agents
5. Continuer jusqu'à ce que tout soit complété

### Exemples de Prompts

```
"Explore ce codebase et explique comment l'auth est implémentée"

"Ajoute une nouvelle API endpoint pour créer des utilisateurs avec validation"

"Refactor le module payment pour utiliser le pattern Strategy"

"Trouve et corrige tous les eslint warnings dans src/"
```

## 🔄 Différences avec l'Original

| Fonctionnalité | Original | Ce Fork GLM 4.7 |
|----------------|----------|------------------|
| **Modèles par défaut** | Multi-fournisseur (Claude, GPT, Gemini, Grok) | **GLM 4.7 uniquement** |
| **Orchestration** | Optimisée pour chaque modèle | Optimisée pour **GLM 4.7** |
| **Coût** | Requiert abonnements multiples | **100% gratuit avec Z AI** |
| **Hooks** | ✅ 21 hooks | ✅ Identique |
| **Tools LSP** | ✅ 11 outils | ✅ Identique |
| **MCPs** | ✅ 3 builtin | ✅ Identique |
| **Compatibilité Claude Code** | ✅ Full | ✅ Identique |

## ⚡ Performance avec GLM 4.7

Ce que vous GAGNEZ:
- Coût: **0€** (vs 40-60€/mois pour full stack)
- Hooks: Toujours très puissants
- Tools LSP: Indépendants du modèle
- Background agents: Toujours utiles
- MCPs: Toujours disponibles

Ce que vous PERDEZ:
- Prompts optimisés pour chaque modèle
- Spécialisation par tâche (Oracle = moins bon en deep reasoning)
- Vitesse exploration (Grok gratuit)

## 🛠️ Développement

```bash
# Cloner ce fork
git clone https://github.com/uglyswap/oh-my-opencode.git
cd oh-my-opencode

# Installer dépendances
bun install

# Build
bun run build

# Test local avec OpenCode
# Dans ~/.config/opencode/opencode.json:
{
  "plugin": [
    "file:///C:/Users/quent/oh-my-opencode-glm/dist/index.js"
  ]
}
```

## 📝 Changelog du Fork

### v2.7.0-glm (2025-01-04)
- ✅ Tous les agents configurés pour `glm/glm-4.7` par défaut
- ✅ README mis à jour pour GLM 4.7
- ✅ Documentation d'installation simplifiée
- ⏳ Prompts à optimiser pour GLM 4.7 (TODO)

## 🙏 Remerciements

- **YeonGyu Kim** (@yeon_gyu_kim) - Créateur original du projet
- **SST** - OpenCode framework
- **Z AI** - GLM 4.7 model provider

## 📄 Licence

SUL-1.0 (Same as original)

---

**Pour la documentation originale complète**, voir: [code-yeongyu/oh-my-opencode](https://github.com/code-yeongyu/oh-my-opencode)

<div align="center">

**⭐ Si ce fork vous aide, star le repo !**

</div>
