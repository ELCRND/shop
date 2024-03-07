import type { SelectProps } from "antd";
import { Select, Space } from "antd";

const handleChange = (value: string[]) => {
  //   console.log(`selected ${value}`);
};

const options: SelectProps["options"] = [
  {
    label: "All categories",
    value: "All",
  },
  {
    label: "Accessories",
    value: "Accessories",
  },
  {
    label: "Jewelry",
    value: "Jewelry",
  },
  {
    label: "Clothing",
    value: "Clothing",
  },
  {
    label: "Shoes",
    value: "Shoes",
  },
  {
    label: "Home",
    value: "Home",
  },
  {
    label: "Living",
    value: "Living",
  },
  {
    label: "Wedding",
    value: "Wedding",
  },
  {
    label: "Toys",
    value: "Toys",
  },
  {
    label: "Entertainment",
    value: "Entertainment",
  },
  {
    label: "Art",
    value: "Art",
  },
  {
    label: "Collectibles",
    value: "Collectibles",
  },
  {
    label: "Craft Supplies",
    value: "Craft Supplies",
  },
  {
    label: "Tools",
    value: "Tools",
  },
];

const CustomSelect: React.FC = () => (
  <Select
    placeholder="select filter"
    defaultValue={["All"]}
    onChange={handleChange}
    optionLabelProp="label"
    options={options}
    optionRender={(option) => (
      <Space>
        <span role="img" aria-label={option.data.label}>
          {option.value}
        </span>
      </Space>
    )}
  />
);

export default CustomSelect;
