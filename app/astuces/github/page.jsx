'use client'
import { useState } from 'react'
import { ClipboardIcon, CheckIcon, GitBranchIcon, GitCommitIcon, GitMergeIcon, GitPullRequestIcon, TerminalIcon, InfoIcon } from 'lucide-react'
import Navbar from '@/components/navbar/navbar'

const CommandItem = ({ command, explanation, example, tip }) => {
  const [copiedCommand, setCopiedCommand] = useState(false)
  const [showTip, setShowTip] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command)
    setCopiedCommand(true)
    setTimeout(() => setCopiedCommand(false), 2000)
  }

  return (
    <div className="mb-8 last:mb-0 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <div className="relative mb-2">
          <pre className="font-mono text-sm bg-gray-100 p-4 rounded-lg overflow-x-auto">{command}</pre>
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            aria-label="Copy to clipboard"
          >
            {copiedCommand ? (
              <CheckIcon className="w-5 h-5 text-green-500" />
            ) : (
              <ClipboardIcon className="w-5 h-5" />
            )}
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-2">{explanation}</p>
      </div>
      <div className="p-4 bg-gray-50">
        <h4 className="font-semibold text-sm mb-2">Exemple :</h4>
        <pre className="font-mono text-xs bg-gray-200 p-3 rounded-lg overflow-x-auto">{example}</pre>
      </div>
      {tip && (
        <div className="p-4 bg-blue-50 relative">
          <button
            onClick={() => setShowTip(!showTip)}
            className="absolute top-2 right-2 text-blue-500 hover:text-blue-700 focus:outline-none"
            aria-label={showTip ? "Hide tip" : "Show tip"}
          >
            <InfoIcon className="w-5 h-5" />
          </button>
          {showTip && (
            <div className="mt-2">
              <h4 className="font-semibold text-sm mb-1">Astuce :</h4>
              <p className="text-xs text-gray-600">{tip}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const CommandSection = ({ title, icon, commands }) => {
  return (
    <div className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex items-center">
        {icon}
        <h2 className="text-2xl font-bold text-white ml-3">{title}</h2>
      </div>
      <div className="p-6">
        {commands.map((cmd, index) => (
          <CommandItem key={index} {...cmd} />
        ))}
      </div>
    </div>
  )
}

export default function Github() {
  const sections = [
    {
      title: "Démarrage",
      icon: <TerminalIcon className="w-6 h-6 text-white" />,
      commands: [
        {
          command: "git init",
          explanation: "Initialise un nouveau dépôt Git dans le répertoire courant.",
          example: "$ git init",
          tip: "Utilisez cette commande une seule fois par projet, à la racine du répertoire."
        },
        {
          command: "git clone https://github.com/username/repository.git",
          explanation: "Clone un dépôt distant sur votre machine locale.",
          example: "$ git clone https://github.com/facebook/react.git",
          tip: "Vous pouvez spécifier un nom de dossier différent après l'URL pour cloner dans un dossier spécifique."
        },
        {
          command: "git config --global user.name \"Your Name\"",
          explanation: "Configure votre nom d'utilisateur Git globalement.",
          example: "$ git config --global user.name \"John Doe\"",
          tip: "Utilisez --local au lieu de --global pour configurer uniquement le dépôt courant."
        },
        {
          command: "git config --global user.email \"your_email@example.com\"",
          explanation: "Configure votre adresse e-mail Git globalement.",
          example: "$ git config --global user.email \"john.doe@example.com\"",
          tip: "Assurez-vous d'utiliser la même adresse e-mail que celle de votre compte GitHub."
        }
      ]
    },
    {
      title: "Commandes de base",
      icon: <GitCommitIcon className="w-6 h-6 text-white" />,
      commands: [
        {
          command: "git status",
          explanation: "Affiche l'état actuel du dépôt, y compris les fichiers modifiés et stagés.",
          example: "$ git status",
          tip: "Utilisez git status -s pour un aperçu plus concis."
        },
        {
          command: "git add .",
          explanation: "Ajoute tous les fichiers modifiés à la zone de staging.",
          example: "$ git add .\n$ git add fichier1.js fichier2.js",
          tip: "Utilisez git add -p pour ajouter des parties spécifiques de fichiers."
        },
        {
          command: "git commit -m \"Commit message\"",
          explanation: "Crée un nouveau commit avec les fichiers stagés et un message descriptif.",
          example: "$ git commit -m \"Ajoute une nouvelle fonctionnalité de recherche\"",
          tip: "Écrivez des messages de commit clairs et concis, au présent de l'indicatif."
        },
        {
          command: "git push origin main",
          explanation: "Pousse les commits locaux vers la branche principale du dépôt distant.",
          example: "$ git push origin main",
          tip: "Assurez-vous de toujours pull avant de push pour éviter les conflits."
        },
        {
          command: "git pull origin main",
          explanation: "Récupère et fusionne les changements de la branche principale distante.",
          example: "$ git pull origin main",
          tip: "Utilisez git pull --rebase pour garder un historique linéaire."
        }
      ]
    },
    {
      title: "Gestion des branches",
      icon: <GitBranchIcon className="w-6 h-6 text-white" />,
      commands: [
        {
          command: "git branch",
          explanation: "Liste toutes les branches locales.",
          example: "$ git branch",
          tip: "Utilisez git branch -a pour voir aussi les branches distantes."
        },
        {
          command: "git branch new-branch",
          explanation: "Crée une nouvelle branche nommée 'new-branch'.",
          example: "$ git branch feature/login",
          tip: "Utilisez des noms descriptifs pour vos branches, comme 'feature/...' ou 'bugfix/...'."
        },
        {
          command: "git checkout -b new-branch",
          explanation: "Crée une nouvelle branche et bascule dessus immédiatement.",
          example: "$ git checkout -b feature/payment-integration",
          tip: "Cette commande combine 'git branch' et 'git checkout' en une seule étape."
        },
        {
          command: "git checkout existing-branch",
          explanation: "Bascule sur une branche existante.",
          example: "$ git checkout develop",
          tip: "Assurez-vous de commiter ou stasher vos changements avant de changer de branche."
        },
        {
          command: "git merge branch-name",
          explanation: "Fusionne la branche spécifiée dans la branche courante.",
          example: "$ git checkout main\n$ git merge feature/login",
          tip: "Résolvez les conflits s'il y en a, puis commitez les changements."
        }
      ]
    },
    {
      title: "Dépôts distants",
      icon: <GitPullRequestIcon className="w-6 h-6 text-white" />,
      commands: [
        {
          command: "git remote add origin https://github.com/username/repository.git",
          explanation: "Ajoute un nouveau dépôt distant nommé 'origin'.",
          example: "$ git remote add origin https://github.com/johndoe/mon-projet.git",
          tip: "Vous pouvez ajouter plusieurs dépôts distants avec des noms différents."
        },
        {
          command: "git remote -v",
          explanation: "Liste tous les dépôts distants configurés.",
          example: "$ git remote -v",
          tip: "Utilisez cette commande pour vérifier les URL de vos dépôts distants."
        },
        {
          command: "git fetch origin",
          explanation: "Récupère les dernières modifications du dépôt distant sans fusionner.",
          example: "$ git fetch origin",
          tip: "Utilisez git fetch --all pour récupérer depuis tous les dépôts distants."
        },
        {
          command: "git push origin branch-name",
          explanation: "Pousse la branche spécifiée vers le dépôt distant 'origin'.",
          example: "$ git push origin feature/login",
          tip: "Vous pouvez utiliser git push --set-upstream origin new-branch la première fois que vous poussez une branche."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
        <header className="flex justify-center items-center  text-white py-12">
        <Navbar/>
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-2"></h1>
                <p className="text-xl"></p>
            </div>
        </header>
      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((section, index) => (
            <CommandSection key={index} title={section.title} icon={section.icon} commands={section.commands} />
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">Créé avec ❤️ pour les utilisateurs de GitHub</p>
          <p className="text-sm text-gray-400">© 2023 GitHub Cheat Sheet. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
