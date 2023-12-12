
import React, { useState, useEffect } from 'react';
import {  Table, Space,  Input, Tooltip  } from 'antd';
import { SearchOutlined , InfoCircleOutlined } from '@ant-design/icons';


function Counter() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');


  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/');
        const result = await response.json();
        setData(result.products);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once (on mount).


 const handleSearch = async (value) => {
    setSearchInput(value);
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${value}`);
      const result = await response.json();
      setData(result.products);

    } catch (error) {
      console.error('Error fetching search results:', error);
      setData([]); // Set filtered data to an empty array in case of an error
    } finally{
         setLoading(false);
    }
    console.log('click')
  };

  
const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
    handleSearch(value);
  };


  const columns = [
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
           ellipsis: true,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
           ellipsis: true,
    },
    {
      title: 'Stocks',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <a href="#">Edit</a>
          <a href="#">Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      
        <div className='pads'>
          <br />
              <h3>Products </h3>
             <Input
                    placeholder='Search by product name'
                    value={searchInput}
                    prefix={<SearchOutlined className="site-form-item-icon" />}
                    onChange={handleInputChange}
                      style={{ width: 200, marginBottom: '16px', float: 'right' }}

                        suffix={
                                <Tooltip title="Search products">
                                <InfoCircleOutlined style={{ color: 'rgba(0, 0, 0, 0.69)' }} />
                                </Tooltip>
                            }
                    />
              <Table 
              dataSource={data} 
              columns={columns} 
              bordered  
              loading={loading} 
              size='small' 
              pagination={{ 
                // pageSize: 15,
               showSizeChanger: true,
               pageSizeOptions: ['15', '20', '40', 'all'],
             }}/>
        </div>
        
    </div>
  );
}

export default Counter;

