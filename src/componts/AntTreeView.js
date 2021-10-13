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

    const onExpandCheckable = (expandedKeys) => {
        console.log('onExpand', expandedKeys);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        setState({
            expandedKeys,
            autoExpandParent: false,
        });
    }
    const onCheckCheckable = (checkedKeys) => {
        console.log('onCheck', checkedKeys);
        setState({ checkedKeys });
    }
    const onSelectCheckable = (selectedKeys, info) => {
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

    const onSelectShowLine = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    }

    return (
        <div>
            <div>

                <Tree
                    checkable
                    onExpand={onExpandCheckable}
                    expandedKeys={state.expandedKeys}
                    autoExpandParent={state.autoExpandParent}
                    onCheck={onCheckCheckable}
                    checkedKeys={state.checkedKeys}
                    onSelect={onSelectCheckable}
                    selectedKeys={state.selectedKeys}
                >
                    {renderTreeNodes(treeData)}
                </Tree>
            </div>
            <hr />
            <div>
                <Tree
                    showLine
                    defaultExpandedKeys={['0-2']}
                    onSelect={onSelectShowLine}
                >
                    <TreeNode title="parent 2" key="0-2">
                        <TreeNode title="parent 2-1" key="2-0-1" />
                        <TreeNode title="parent 2-2" key="2-0-2" />
                        <TreeNode title="parent 2-3" key="2-0-3" />
                    </TreeNode>
                    <TreeNode title="parent 1" key="0-1">
                        <TreeNode title="parent 1-0" key="0-0-0">
                            <TreeNode title="leaf" key="0-0-0-0" />
                            <TreeNode title="leaf" key="0-0-0-1" />
                            <TreeNode title="leaf" key="0-0-0-2" />
                        </TreeNode>
                        <TreeNode title="parent 1-1" key="0-0-1">
                            <TreeNode title="leaf" key="0-0-1-0" />
                        </TreeNode>
                        <TreeNode title="parent 1-2" key="0-0-2">
                            <TreeNode title="leaf" key="0-0-2-0" />
                            <TreeNode title="leaf" key="0-0-2-1" />
                        </TreeNode>
                    </TreeNode>
                </Tree>
            </div>
        </div >
    )
}

export default AntTreeView;