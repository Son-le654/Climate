import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const AdminContentRow = () => {
    const data = [
        {
            Type: 'Online',
            Name: 'Dr.Phong',
            Number: 20,
        },
        {
            Type: 'Online',
            Name: 'Dr.Son',
            Number: 28.8,
        },
        {
            Type: 'Online',
            Name: 'Dr.Tai',
            Number: 39.3,
        },
        {
            Type: 'Online',
            Name: 'Dr.Nghia',
            Number: 81.4,
        },
        {
            Type: 'Online',
            Name: 'Dr.Bien',
            Number: 47,
        },
        {
            Type: 'Online',
            Name: 'Dr.Dat',
            Number: 20.3,
        },
        {
            Type: 'Online',
            Name: 'Dr.Linh',
            Number: 24,
        },
        {
            Type: 'Online',
            Name: 'Dr.Trang',
            Number: 35.6,
        },
        {
            Type: 'Completed',
            Name: 'Dr.Phong',
            Number: 40,
        },
        {
            Type: 'Completed',
            Name: 'Dr.Son',
            Number: 23.2,
        },
        {
            Type: 'Completed',
            Name: 'Dr.Tai',
            Number: 34.5,
        },
        {
            Type: 'Completed',
            Name: 'Dr.Nghia',
            Number: 99.7,
        },
        {
            Type: 'Completed',
            Name: 'Dr.Bien',
            Number: 52.6,
        },
        {
            Type: 'Completed',
            Name: 'Dr.Dat',
            Number: 35.5,
        },
        {
            Type: 'Completed',
            Name: 'Dr.Linh',
            Number: 37.4,
        },
        {
            Type: 'Completed',
            Name: 'Dr.Trang',
            Number: 42.4,
        },
    ];
    const config = {
        data,
        isGroup: true,
        xField: 'Name',
        yField: 'Number',
        seriesField: 'Type',
        label: {
            position: 'middle',
            layout: [
                {
                    type: 'interval-adjust-position',
                },
                {
                    type: 'interval-hide-overlap',
                },
                {
                    type: 'adjust-color',
                },
            ],
        },
    };
    return <div className='w-[100%] flex justify-center items-center'><Column {...config} className='w-[90%]' />;</div>
};
export default AdminContentRow
