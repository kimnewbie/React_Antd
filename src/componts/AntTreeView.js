import React, { useState } from 'react'
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;

const AntTreeView = () => {
    const treeData = [
        {
            title: '0-1',
            key: '0-1',
            children: [
                { title: '0-1-0-0', key: '0-1-0-0' },
                { title: '0-1-0-1', key: '0-1-0-1' },
                { title: '0-1-0-2', key: '0-1-0-2' },
            ],
        },
        {
            title: '0-2',
            key: '0-2',
            children: [
                { title: '0-2-0-0', key: '0-2-0-0' },
                { title: '0-2-0-1', key: '0-2-0-1' },
                { title: '0-2-0-2', key: '0-2-0-2' },
            ],
        },
        {
            title: '0-3',
            key: '0-3',
            children: [
                { title: '0-3-0-0', key: '0-3-0-0' },
                { title: '0-3-0-1', key: '0-3-0-1' },
                { title: '0-3-0-2', key: '0-3-0-2' },
            ],
        },
    ];

    const [state, setState] = useState({
        expandedKeys: ['0-0-0', '0-0-1'],
        autoExpandParent: true,
        checkedKeys: ['0-0-0'],
        selectedKeys: [],
    });

    const onExpand = (expandedKeys) => {
        console.log('onExpand', expandedKeys);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        setState({
            expandedKeys,
            autoExpandParent: false,
        });
    }
    const onCheck = (checkedKeys) => {
        console.log('onCheck', checkedKeys);
        setState({ checkedKeys });
    }
    const onSelect = (selectedKeys, info) => {
        console.log('onSelect', info);
        setState({ selectedKeys });
    }
    const renderTreeNodes = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <TreeNode title={item.title} key={item.key} dataRef={item}>
                        {renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode {...item} />;
        });
    }

    return (
        <div>
            <Tree
                checkable
                onExpand={onExpand}
                expandedKeys={state.expandedKeys}
                autoExpandParent={state.autoExpandParent}
                onCheck={onCheck}
                checkedKeys={state.checkedKeys}
                onSelect={onSelect}
                selectedKeys={state.selectedKeys}
            >
                {renderTreeNodes(treeData)}
            </Tree>
        </div >
    )
}

export default AntTreeView;