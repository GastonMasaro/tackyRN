import React, { Component } from 'react';
import { Text} from 'react-native';
import { Container, Button, Icon, Item, Input, Content, Left} from 'native-base';
import { View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
export default class Ingrediente extends Component {
  constructor(props){
    super(props);
    this.state = {
        // rows: ['row 1', 'row 2'],
        rows: [
          { "id":1 },
          { "id":2 },
          { "id":3 }
        ]
    }
    this.addRow = this.addRow.bind(this)
    this.deleteRow = this.deleteRow.bind(this)
  }

addRow(){ 
  console.log(this.state)
  this.state.rows;
  var r = {};
  r.id = this.state.rows.length+1;
  this.setState({
    rows:[...this.state.rows,r]
  })
}
deleteRow(r){
  if(this.state.rows.length>1){
    var array = [...this.state.rows]; // make a separate copy of the array
    var index = array.indexOf(r)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({rows: array});
    }
  }
}
 
  render() {
    return (
      <View>
      {this.state.rows.map((r) =>
        <Item key={r.id}>
          <Button  onPress={() => this.deleteRow(r)} transparent textStyle={{color: '#87838B'}}>
            <TextInput style={{ fontSize: 20}} placeholder='Cantidad y nombre de ingredientes'/>
            <Icon active name='close'/>
          </Button>
      </Item>
      
        )}  
        <Content>
        <Left>
                <Button onPress={this.addRow} transparent textStyle={{color: '#87838B'}}>
                  <Icon name="add" />
                  <Text style={{ fontSize: 20}}>Ingrediente</Text>
                </Button>
        </Left>
        </Content>
      </View>
    );
  }
}