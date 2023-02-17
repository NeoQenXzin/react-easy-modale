EasyModale
EasyModale est un module npm qui permet de créer facilement une modale personnalisable pour votre application React.

Installation
Pour installer EasyModale, vous pouvez utiliser npm en tapant la commande suivante :

css
Copy code
npm install --save easymodale
Utilisation
Importation
Pour utiliser EasyModale dans votre application, vous devez l'importer dans votre fichier JavaScript ou TypeScript comme suit :

javascript
Copy code
import EasyModale from 'easymodale';
Utilisation
Une fois que vous avez importé EasyModale, vous pouvez l'utiliser dans votre composant React. Voici un exemple d'utilisation :

jsx
Copy code
import React, { useState } from 'react';
import EasyModale from 'easymodale';

function MyComponent() {
const [isModalOpen, setIsModalOpen] = useState(false);
const show = () => {
setIsModalOpen(true);
};
const closeModal = () => {
setIsModalOpen(false);
};

return (
<div>
<button onClick={() => show()}>Ouvrir la modale</button>
<EasyModale
        text="Ceci est le contenu de la modale."
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
</div>
);
}
Dans cet exemple, une modale est créée en utilisant EasyModale. La propriété text spécifie le contenu de la modale, isOpen spécifie si la modale est actuellement ouverte ou fermée, et closeModal est une fonction qui est appelée lorsque l'utilisateur ferme la modale.

Options
EasyModale prend en charge plusieurs options pour personnaliser l'apparence et le comportement de la modale. Voici la liste des options disponibles :

text
Le contenu de la modale. Cela peut être du texte brut, du HTML ou n'importe quel autre contenu.

isOpen
Un booléen qui indique si la modale est actuellement ouverte ou fermée.

closeModal
Une fonction qui est appelée lorsque l'utilisateur ferme la modale.

animated1
Un booléen qui indique si la modale doit afficher une animation de texte apparaissant.

animated2
Un booléen qui indique si la modale doit afficher une animation de texte tapé au clavier.

animated3
Un booléen qui indique si la modale doit afficher une animation de texte défilant.

typingSpeed
La vitesse à laquelle le texte est tapé lors de l'animation de texte tapé au clavier. La valeur par défaut est de 50 millisecondes.

Conclusion
EasyModale est un module npm simple et facile à utiliser qui vous permet de créer rapidement et facilement une modale personnalisable pour votre application React. Avec les nombreuses options disponibles, vous pouvez personnaliser facilement l'apparence et le comportement de votre modale pour répondre à vos besoins spécifiques.
