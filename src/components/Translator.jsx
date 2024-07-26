// src/Translator.js
import React, { useState } from 'react';
import axios from 'axios';
import languages from './languages';

const Translator = () => {
    const [sourceLanguage, setSourceLanguage] = useState('en');
    const [targetLanguage, setTargetLanguage] = useState('es');
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [loading, setLoading] = useState(false);

    const handleTranslate = async () => {
        setLoading(true);
        const encodedParams = new URLSearchParams();
        encodedParams.append("source_language", sourceLanguage);
        encodedParams.append("target_language", targetLanguage);
        encodedParams.append("text", text);

        try {
            const response = await axios({
                method: 'POST',
                url: 'https://text-translator2.p.rapidapi.com/translate',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'X-RapidAPI-Key': 'b8bb314eb8msh5bcb832919161fdp12af72jsn4c6c655daa90',
                    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
                },
                data: encodedParams.toString(),
            });

            setTranslatedText(response.data.data.translatedText);
        } catch (error) {
            console.error('Error translating text:', error);
        }
        setLoading(false);
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg shadow-lg mt-10">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Universal Language Translator</h1>
            <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700">Source Language</label>
                <select
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={sourceLanguage}
                    onChange={(e) => setSourceLanguage(e.target.value)}
                >
                    {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>{lang.name}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700">Target Language</label>
                <select
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={targetLanguage}
                    onChange={(e) => setTargetLanguage(e.target.value)}
                >
                    {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>{lang.name}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700">Text to Translate</label>
                <textarea
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <button
                    className={`w-full p-3 rounded-lg text-white ${loading ? 'bg-gray-400' : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    onClick={handleTranslate}
                    disabled={loading}
                >
                    {loading ? 'Translating...' : 'Translate'}
                </button>
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700">Translated Text</label>
                <textarea
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    value={translatedText}
                    readOnly
                />
            </div>
        </div>
    );
};

export default Translator;
