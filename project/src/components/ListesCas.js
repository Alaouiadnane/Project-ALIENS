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
import './ListeCas.css';  
import Listetemoignages from './Listetemoignages'


class ListesCas extends React.Component{
    constructor(){
        super();
        this.state = {
          data: [],
          idcas: null,
          selectedRow:null
        }
    };
     componentDidMount(){
      console.log("je vais chercher les cas");

      // const response =  fetch(`/api`);
      // console.log(response.body);
      // const data =  response.json();
      // console.log(data)
      //fetch('/api')
      //     .then(function(response) { return response.json()}
      //     .then(
      //       data => {
      //       console.log("dddddd");
      //       console.log((data.body));
      //       this.setState({ data : data.data });
      //       console.log(this.state.data);
      //   },
      //   error => {
      //     this.setState({
      //       error
      //   })
      // }))
      fetch("/api")
      .then(response => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          data:data
        })
        console.log(data)   
        console.log(data.cas_nom_dossier)
        data.date=data.cas_AAAA + data.cas_MM + data.cas_JJ;
        console.log(data.date)
      })
    }

    render(){
      return (
          <div className="body">
          <Paper>
        <MaterialTable
          //style={{alignItems: 'center', justifyContent: 'center' }}
          title="Liste des Cas"
          options={{
            headerStyle: {
              backgroundColor: '#039be5',
              color: '#FFF'
            }
          }}
          columns={[
            { title: 'Nom de dossier', field: 'cas_nom_dossier',
            headerStyle: {
              backgroundColor: '#039be5',
            } },
            { title: 'Nom de la zone', field: 'cas_zone_nom',
            headerStyle: {
              backgroundColor: '#039be5',
            }},
            { title: 'Code Zone', field: 'cas_zone_code',
            headerStyle: {
              backgroundColor: '#039be5',
            }},
            { title: 'Date', field: 'cas_AAAA',
            headerStyle: {
              backgroundColor: '#039be5',
            }},
            { title: 'Nombre de temoignages', field: 'cas_temoignages_nb',
            headerStyle: {
              backgroundColor: '#039be5',
            }},
            { title: 'Resumé Cas', field: 'cas_resume_web',headerStyle: {
              backgroundColor: '#039be5',
            }},
          ]}
          data={this.state.data}
          //columns={state.columns}
          //data={this.state.data}   
          icons={{Add:AddBox, Check: Check,
            Clear: Clear,Delete: DeleteOutline,  DetailPanel: ChevronRight, Edit: Edit, Export: SaveAlt, Filter: FilterList,
            FirstPage: FirstPage, LastPage: LastPage, NextPage: ChevronRight, PreviousPage: ChevronLeft, ResetSearch: Clear,
            Search: Search, SortArrow: ArrowUpward, ThirdStateCheck: Remove, ViewColumn: ViewColumn, }}

            detailPanel={[
              {
                tooltip: 'Afficher temoignages',
                headerStyle:{backgroundColor:'#039be5'},
                render: rowData => {
                  return (
                     
                     
                     <Listetemoignages
                      titre={"Temoignages Cas "}
                      idcas={rowData.id_cas}
                      nbrtemoignages={rowData.nbrtemoignages}
                     ></Listetemoignages>
                     
                  )
                },
              },
            ]}
            onRowClick={(event, rowData, togglePanel) => {
              togglePanel()
              }}
        />
        </Paper>
        </div>
      );
    }
}
  
  export default ListesCas;