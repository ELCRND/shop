import { useLang } from "@/hooks/useLang";
import type { SelectProps } from "antd";
import { Select, Space } from "antd";

const handleChange = (value: string[]) => {
  //   console.log(`selected ${value}`);
};



const CustomSelect: React.FC = () => {
  const {lang,translations}=useLang()
  const options: SelectProps["options"] = [
    {
      label: translations[lang].header["all"],
      value: translations[lang].header["all"],
    },
    {
      label: translations[lang].header["accessories"],
      value: translations[lang].header["accessories"],
    },
    {
      label: translations[lang].header["jewelry"],
      value: translations[lang].header["jewelry"],
    },
    {
      label: translations[lang].header["clothing"],
      value: translations[lang].header["clothing"],
    },
    {
      label: translations[lang].header["shoes"],
      value: translations[lang].header["shoes"],
    },
    {
      label: translations[lang].header["home"],
      value: translations[lang].header["home"],
    },
    {
      label: translations[lang].header["living"],
      value: translations[lang].header["living"],
    },
    {
      label: translations[lang].header["wedding"],
      value: translations[lang].header["wedding"],
    },
    {
      label: translations[lang].header["toys"],
      value: translations[lang].header["toys"],
    },
    {
      label: translations[lang].header["entertainment"],
      value: translations[lang].header["entertainment"],
    },
    {
      label: translations[lang].header["art"],
      value: translations[lang].header["art"],
    },
    {
      label: translations[lang].header["collectibles"],
      value: translations[lang].header["collectibles"],
    },
    {
      label: translations[lang].header["craftSupplies"],
      value: translations[lang].header["craftSupplies"],
    },
    {
      label: translations[lang].header["tools"],
      value: translations[lang].header["tools"],
    },
  ];
  return <Select
    style={{ border:"none" }}
    className="hidden tablet:block"
    placeholder="select filter"
    defaultValue={[`${translations[lang].header['all']}`]}
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
    };

export default CustomSelect;
