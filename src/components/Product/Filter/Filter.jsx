import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Filter.css";
import { FilterList } from "@mui/icons-material";
import { Button, Drawer, Space } from "antd";

const Filter = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Space>
        <Button size="small" type="primary" onClick={showDrawer}>
          Filters
        </Button>
      </Space>
      <Drawer
        title="Filters"
        placement="bottom"
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button className="filter-open-btn" onClick={onClose}>
              Cancel
            </Button>
            <Button type="primary" onClick={onClose}>
              Apply
            </Button>
          </Space>
        }
      >
      
      <div className="filter-main-container">
      
      
      <div className="filter-box"><h3 className="cat-title"><b>Price</b></h3>
      <hr/>
      <div >
      <p className="filter-cat">0-500</p>
      <p className="filter-cat">500-1500</p>
      <p className="filter-cat">1500-5000</p>
      <p className="filter-cat">5000 and above</p>
      </div>
      
      </div> 
      <div className="filter-box"><h3 className="cat-title"><b>Color</b></h3>
      <hr/>
      <div>
      
      <p className="filter-cat">Blue</p>
      <p className="filter-cat">Green</p>
      <p className="filter-cat">White</p>
      <p className="filter-cat">Grey</p>
      <p className="filter-cat">Pink</p>
      <p className="filter-cat">Red</p>
      
      </div>
      </div>
      <div className="filter-box"><h3 className="cat-title"><b>Size</b></h3>
      <hr/>
      <div>
      
      <p className="filter-cat">Xtra small</p>
      <p className="filter-cat">Small</p>
      <p className="filter-cat">Medium</p>
      <p className="filter-cat">Large</p>
      <p className="filter-cat">Xtra large</p>
      <p className="filter-cat">Double xtra large</p>
      </div>
      </div>
      <div className="filter-box"><h3 className="cat-title"><b>Discount</b></h3>
      <hr/>
      <div>
      
      <p className="filter-cat">10%</p>
      <p className="filter-cat">30%</p>
      <p className="filter-cat">50%</p>
      </div>
      </div>
      </div>
        
      </Drawer>
    </div>
  );
};

export default Filter;
