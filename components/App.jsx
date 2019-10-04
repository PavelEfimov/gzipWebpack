import React from 'react';

import { file } from '../sources/file';

import { saveFile } from '../utils';

const App =  () => {

    const onClick = () => {
        file().then(({ data }) => saveFile('plan.docx', data));
    };

    return (
        <div>
            <button onClick={onClick}>Загрузить файл</button>
        </div>
    );
};

export default App;
