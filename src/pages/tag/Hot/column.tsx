import type { ProColumns } from '@ant-design/pro-table';
import type { TableListItem } from './data';
import { Button, Image, Tag } from 'antd';

const columns: ProColumns<TableListItem>[] = [
  {
    title: '话题ID',
    dataIndex: 'id',
    hideInForm: true,
  },
  {
    title: '话题名称',
    dataIndex: 'tag_name',
    hideInForm: true,
  },
  {
    title: '图片',
    dataIndex: 'img_url',
    hideInForm: true,
    render(dom) {
      return dom === '-' ? '-' : <Image width={40} height={40} src={dom as string} />;
    },
  },
  {
    title: '话题状态',
    dataIndex: 'state',
    valueEnum: {
      0: { text: '禁用', status: 'close' },
      1: { text: '启用', status: 'enabled' },
    },
    render: (_, record) => {
      if (_ === 'close') {
        return <span className="disabled-tag">禁用</span>;
      }

       
        return <span className="enabled-tag">启用</span>;
    },
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    hideInForm: true,
  },
  {
    title: '操作',
    dataIndex: 'option',
    valueType: 'option',
    render: (_, record) => [
      <Button type="primary" className="button primary-button">
        编辑
      </Button>,
      <Button type="primary" className="button success-button">
        启用
      </Button>,
      <Button type="primary" className="button warning-button">
        推荐
      </Button>,
      <Button type="primary" className="button danger-button">
        删除
      </Button>,
    ],
  },
];

export default columns;
