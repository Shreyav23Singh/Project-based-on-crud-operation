var selectedRow=null ; //Global Variable

function onFormSubmit(e){
    event.preventDefault();
    var formData=readFromdata();
    if(selectedRow==null){
        InsertNewRecord(formData);
    }else{
        updateRecord(formData);
    }
    resetForm();   

}

//Retrieve Data
function readFromdata(){
    var formData ={};
    formData["productCode"] =document.getElementById("productCode").value;
    
    formData["product"] =document.getElementById("product").value;
    
    formData["qty"] =document.getElementById("qty").value;
    
    formData["perPrice"] =document.getElementById("perPrice").value;
    return formData;
    
}

//Insert the data
function InsertNewRecord(data){
    var table= document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length); //When data will insert into the row , than table length will increase by 1
    cell1 =newRow.insertCell(0);
    cell1.innerHTML =data.productCode;
    cell2 =newRow.insertCell(1);
    cell2.innerHTML =data.product;
    cell3 =newRow.insertCell(2);
    cell3.innerHTML =data.qty;
    cell4 =newRow.insertCell(3);
    cell4.innerHTML =data.perPrice;
    cell4 =newRow.insertCell(4);
    cell4.innerHTML=`<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("productCode").value =selectedRow.cells[0].innerHTML;
    document.getElementById("product").value =selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value =selectedRow.cells[2].innerHTML;
    document.getElementById("perPrice").value =selectedRow.cells[3].innerHTML;


}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML =formData.productCode;
    selectedRow.cells[1].innerHTML =formData.product;
    selectedRow.cells[2].innerHTML =formData.qty;
    selectedRow.cells[3].innerHTML =formData.perPrice;

}

//delete the data
function onDelete(td){
    if(confirm('Are you sure , you want to delete this ?')){
        row=td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();

    }
}
//Reset the data
function resetForm() {
    document.getElementById("productCode").value = '';
    document.getElementById("product").value = '';
    document.getElementById("qty").value = '';
    document.getElementById("perPrice").value = '';
    selectedRow = null;
}
