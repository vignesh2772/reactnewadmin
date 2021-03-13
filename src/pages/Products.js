import React from 'react';
import MaterialTable from 'material-table';


const Products = () => {
  const data=[
      {TransactionID:'1234567890' ,OrderID:'20' ,Amount:'1200',PaymentGateway:'SBI',CreatedOn:'25/01/2000'},
      {TransactionID:'2979865655' ,OrderID:'19' ,Amount:'1800',PaymentGateway:'HDFC',CreatedOn:'29/06/2015'},
      {TransactionID:'5646465465' ,OrderID:'45' ,Amount:'3400',PaymentGateway:'Kanara',CreatedOn:'25/01/2000'},
      {TransactionID:'9687576564' ,OrderID:'21' ,Amount:'2300',PaymentGateway:'SBI',CreatedOn:'27/07/2000'},
      {TransactionID:'2788768680' ,OrderID:'26' ,Amount:'1900',PaymentGateway:'HDFC',CreatedOn:'22/01/2005'},
      {TransactionID:'1234567890' ,OrderID:'27' ,Amount:'1200',PaymentGateway:'RBI',CreatedOn:'15/01/2000'},
      {TransactionID:'2979865655' ,OrderID:'70' ,Amount:'1800',PaymentGateway:'Kanara',CreatedOn:'26/06/2009'},
      {TransactionID:'5646465465' ,OrderID:'22' ,Amount:'3400',PaymentGateway:'RBI',CreatedOn:'18/09/2000'},
      {TransactionID:'9687576564' ,OrderID:'23' ,Amount:'2300',PaymentGateway:'HDFC',CreatedOn:'25/01/2000'},
      {TransactionID:'2788768680' ,OrderID:'28' ,Amount:'1900',PaymentGateway:'SBI',CreatedOn:'21/09/2020'},

  ];
  const columns=[
    {
        title:'TransactionID',field:'TransactionID'
    },
    {
        title:'OrderID',field:'OrderID'
    },
    {
        title:'Amount',field:'Amount'
    },
    {
        title:'PaymentGateway',field:'PaymentGateway'
    },
    {
        title:'CreatedOn',field:'CreatedOn'
    }
];
  return(<div >
      <MaterialTable title="Products"
      data={data}
      columns={columns}
      options={{
      filtering:true,
      exportButton:true,
      paging:false}}
      />
  </div>);
};

export default Products;
