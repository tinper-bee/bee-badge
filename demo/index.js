import Badge from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


function demo1() {
    return (
        <div className="demo-badge">
                <Badge colors="primary">primary</Badge>
                <Badge colors="info">info</Badge>
                <Badge colors="dark">dark</Badge>
                <Badge colors="success">success</Badge>
                <Badge colors="warning">warning</Badge>
                <Badge colors="danger">danger</Badge>
        </div>
    );
}

function demo2() {
    return (
        <div className="demo-badge">
                <Badge colors="primary">
                	<i className="uf uf-bellmusicaltool"></i>
                </Badge>
                <Badge colors="info">
                	<i className="uf uf-femalesilhouette"></i>
                </Badge>
        </div>
    );
}

ReactDOM.render(demo1(), document.getElementById('ReactBadgeDemo1'));
ReactDOM.render(demo2(), document.getElementById('ReactBadgeDemo2'));
