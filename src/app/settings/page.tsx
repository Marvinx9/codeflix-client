import React from 'react'
import { getAppSettings } from '../lib/settings';

async function Settings() {
    const {theme, language} = await getAppSettings();
    return (
        <div>
            <h1 className='text-2xl font-bold'>Settings Page</h1>

            <div className='border border-dashed border-red-500 p-4'></div>
            <p>Theme: {theme}</p>
            <p>Language: {language}</p>
        </div>
    );
}

export default Settings;