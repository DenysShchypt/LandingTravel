export interface ISelectValue{
    [key: string]:string;

}

export interface ISelectItem  {
    value: string;
    label: string;
  };

  export interface ISelectItemOptions{
    isOpenMobileSelector:boolean;
    selectName:string;
  }