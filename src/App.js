import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import ImageUploader from './component/index.js';
import { rainbow } from 'react-syntax-highlighter/styles/hljs';


export default class App extends React.PureComponent {
    render() {
        return (
            <div className="page">
                <h1>React-images-upload</h1>
                <p>Simple component for upload and validate (client side) images with preview built with React.js.</p>
                <div className="head">Demo</div>
                <ImageUploader style={{ maxWidth: '500px', margin: "20px auto" }}
                               withPreview={true} />
            </div>
        );
    }
}
