import { useState } from "react";
import Language from "./Language.jsx";
import languages from "../data/languages.js"

export default function LanguagesList() {
    function listLanguages() {

        const [languageId, setLanguageId] = useState(null);

        const languageClick = (id) => {
            setLanguageId(languageId === id ? null : id);
        };


        return languages.map((language) => (
            <Language
                key={language.id}
                title={language.title}
                description={language.description}
                isOpen={languageId === language.id}
                onClick={() => languageClick(language.id)}
            />
        ));
    }

    return <div>{listLanguages()}</div>;
}
