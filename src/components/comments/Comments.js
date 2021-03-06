import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Button } from 'native-base';
import comments from '../request/comments.json'
import Modal from "react-native-modal";
import Paso1 from "./Paso1"
import Paso2 from './Paso2.js';
export default class Comments extends Component {
  constructor(props){
    super(props);
    this.state = {
        comments: comments,
        isModalVisible: false,
        paso1:false,
        image:false
    }
    this.toggleModal= this.toggleModal.bind(this);
    this.setPaso1=this.setPaso1.bind(this);
    this.validarCampos=this.validarCampos.bind(this);
  }
  setPaso1(val){
    this.setState({ image: val});
  }
  toggleModal(){
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  validarCampos(){ 
    debugger
    if(this.state.image){
      this.setState({ paso1: true, image:false});
    }else {
      this.setState({ paso1: false, image:true});
    }
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <Header />
        <Content>
          {this.state.comments.comments.map((comment) =>
            <List key={comment.id}>
                <ListItem  avatar>
                <Left>
                    <Thumbnail source={{ uri: comment.image }} />
                </Left>
                <Body>
                    <Text>{comment.autor.nombre}</Text>
                    <Text note>{comment.autor.opinion}</Text>
                </Body>
                <Right>
                    <Text note>{comment.date}</Text>
                </Right>
                </ListItem>
            </List>
        )}
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={ this.toggleModal }
       >
        <Text style={styles.TextStyle}> Agregar un comentario </Text>
        
      </TouchableOpacity>
      <Modal style={styles.container} isVisible={this.state.isModalVisible}>
          <View style={styles.content}>
            {!this.state.paso1 ? (
              <Paso1 image = {this.state.image} sendData={this.setPaso1}></Paso1>
              ) : (
              <Paso2></Paso2>
            )}
            <View style={styles.container2}>
              <View style={styles.buttonContainer}>
                <Button style={{float: 'right', marginLeft:30}} danger onPress={this.toggleModal}>
                            <Text style={styles.TextStyle} >Cerrar</Text>
                </Button>
              </View>
              <View style={styles.buttonContainer}>
                  <Button style={{ float: 'right',marginLeft:25, marginRight:5}} success onPress={this.validarCampos}>
                    <Text style={styles.TextStyle} >Siguiente</Text>
                  </Button>
              </View>
            </View> 
          </View> 
        </Modal>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
 
  SubmitButtonStyle: {
 
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#00BCD4',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
 
  TextStyle:{
      color:'#fff',
      textAlign:'center',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius:10,
    width: 350, 
    height:280
  },
  button: {
    backgroundColor: 'lightblue',
    width: 30, 
    height:20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    backgroundColor: 'white',
    // padding: 22,
    borderRadius: 4,
    width:330,
    height:400,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10
  },
  buttonContainer: {
    flex: 1,
  }
 
});