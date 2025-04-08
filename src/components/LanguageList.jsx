import { useState } from "react";
import Language from "./Language.jsx";
import languages from "../data/languages.js"

export default function LanguagesList() {
    const [languageId, setLanguageId] = useState(null);

    const languageClick = (elem) => {
        setLanguageId(languageId === elem ? null : elem);
    };

    const selectedLanguage = languages.find(element => element.id === languageId);

    return (
        <div>
            <div>
                {languages.map((language) => (
                    <Language
                        key={language.id}
                        title={language.title}
                        onClick={() => languageClick(language.id)}
                    />
                ))}
            </div>
            {selectedLanguage && (
                <div>
                    <h2>{selectedLanguage.title}</h2>
                    <p>{selectedLanguage.description}</p>
                </div>
            )}
        </div>
    );
}