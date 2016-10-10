# bee-badge
[![npm version](https://img.shields.io/npm/v/bee-badge.svg)](https://www.npmjs.com/package/bee-badge)
[![Build Status](https://img.shields.io/travis/tinper-bee/generator-tinper-bee/master.svg)](https://travis-ci.org/tinper-bee/bee-badge)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-badge.svg)](https://david-dm.org/tinper-bee/bee-badge#info=devDependencies)


react bee-badge component for tinper-bee

#### setup develop environment

```sh
$ git clone https://github.com/tinper-bee/bee-badge
$ cd bee-badge
$ npm install
$ npm run dev
```

## Usage

```
import Badge from 'bee-badge';
React.render(<div>
    <div>
        <Badge color="primary">a</Badge>
    </div>
</div>, document.getElementById('target'));

```



## API
|参数|说明|类型|默认值|
|---|----|---|------|
|color|类型(`primary` `success`)|string|''|
|className|增加额外的class|string|''|

