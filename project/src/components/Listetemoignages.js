import React from 'react';
import MaterialTable from "material-table";
import Paper from "@material-ui/core/Paper";
//foor the icons
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { grey } from '@material-ui/core/colors';


class Listemoignages extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            data:[],
            selectedrow:null
        }
    }
    componentDidMount(){
            console.log(this.props.idcas)
            fetch("/Listetemoignages/"+ this.props.idcas)
        .then(response => {
            return response.json();
        })
        .then((data) => { 
            this.setState({
                data:data})
            console.log("ss")   
            console.log(data)
        })
    
    }
    render(){
        return (
            <MaterialTable
                style={{backgroundColor:grey, marginLeft:70, color:"#039be5", textAlign:"center", justifyContent:"center"}}
                icons={{ Filter: () => <div /> }}
                icons={{Add:AddBox, Check: Check,
                    Clear: Clear,Delete: DeleteOutline,  DetailPanel: ChevronRight, Edit: Edit, Export: SaveAlt, Filter: FilterList,
                    FirstPage: FirstPage, LastPage: LastPage, NextPage: ChevronRight, PreviousPage: ChevronLeft, ResetSearch: Clear,
                    Search: Search, SortArrow: ArrowUpward, ThirdStateCheck: Remove, ViewColumn: ViewColumn, }}
                columns={[
                    { title: 'Date et heure observation', field: 'obs_date_heure',},
                    { title: 'Duree observation', field: 'obs_duree_hms' },
                    { title: 'Resume temoigange', field: 'tem_resume'}
                ]}
                title={this.props.titre}
                data={this.state.data}
                options={{
                    paging:false,
                    search:false}
                }
            ></MaterialTable>
        )
    }
}
export default Listemoignages;