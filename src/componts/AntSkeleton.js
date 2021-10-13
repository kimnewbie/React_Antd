import React, { useEffect, useState } from 'react'
import { Skeleton, List, Avatar } from 'antd';

export default function AntSkeleton() {
    const [isLoading, setIsLoading] = useState(false);
    const listData = [];
    for (let i = 1; i < 6; i++) {
        listData.push({
            title: `User ${i}`,
            avatar: "아바타",
            content: "동해물과 백두산이 마르고 닳도록~"
        })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []); // 2초 후 로딩완료


    return (
        <div>
            <List
                itemLayout="vertical"
                size="large"
                dataSource={listData}
                renderItem={(item) => (
                    <List.Item key={item.title}>
                        <Skeleton
                            loading={isLoading}
                            active
                            avatar
                            title={{ width: "100px" }}
                            paragraph={{ width: "400px", rows: 1 }}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href={item.href}>{item.title}</a>}
                            />
                            {item.content}
                        </Skeleton>
                    </List.Item>
                )}
            />
        </div>
    )
}
