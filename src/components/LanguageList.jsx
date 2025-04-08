import Language from "./Language.jsx";
import languages from "../data/languages.js"

export default function LanguagesList() {
    function listLanguages() {

        return languages.map((language) => (
            <Language
                key={language.id}
                title={language.title}
                description={language.description}
            />
        ));
    }

    return <div>{listLanguages()}</div>;
}
