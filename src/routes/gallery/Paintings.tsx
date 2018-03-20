import RX= require('reactxp')
import Paint = require('../../components/Paint');

import _ = require('lodash');


import { VirtualListView, VirtualListViewItemInfo }
    from 'reactxp-virtuallistview';


const _styles={
    BigBox: RX.Styles.createViewStyle({
        flexDirection:'row',
        flex:1,
    }),
    Box1: RX.Styles.createViewStyle({
         justifyContent:'center',
        alignItems:'center',
        flex:50,
    }),
    Box2: RX.Styles.createViewStyle({
           flex:50,            
          flexDirection:'column',
          justifyContent:'center',
          alignItems: 'flex-start',
          flexWrap:'wrap',
    }),
    Titulo: RX.Styles.createTextStyle({
        fontSize:40,
       fontFamily: 'MMA champ',
        marginLeft:-170,   
     }),
     CuadroDetalle: RX.Styles.createViewStyle({
      backgroundColor:'white',
      width:400,
      height:500,  
      paddingRight:30,
      paddingBottom:30,
     }),
     Cuadro: RX.Styles.createImageStyle({
         height:280,
         width:230,
         alignSelf:'center',
         backgroundColor:'black',
         marginTop:50,

     }),
     TitleText: RX.Styles.createTextStyle({
        fontSize:34,
        fontFamily: 'Jenna Sue',
        fontWeight:'bold',
        marginTop:20,
        marginBottom:12,
        marginLeft:20,
    }),
    TitlePrice: RX.Styles.createTextStyle({
        fontSize:34,
        fontFamily: 'Jenna Sue',
        fontWeight:'bold',
        marginTop:20,
        marginBottom:12,
       alignSelf:'flex-end',
    }),
    
    Text: RX.Styles.createTextStyle({
        fontSize:20,
      fontFamily: 'Jenna Sue',
      marginLeft:30,
    }),
  
   
}
interface PaintListItemInfo {
    id: string;
    title: string;
    description: string;
    price:string;
}

interface CuadrosState {
    paintList: PaintListItemInfo[];
    paint:PaintListItemInfo;
}

interface navProps{
    changeToggle:(p:boolean)=>void;
}
class Paintings extends RX.Component <navProps,CuadrosState>{
    componentDidMount(){
        this.props.changeToggle(false)
    }
    constructor(props:null) {
        super(props);

        this.state = {
            paint:{
                id:'0',
                title:'Select a Paint',
                description:'',
                price:'0'
            },
            paintList: [{
                id:'1',
                title:'cuadro1',
                description:'hoola',
                price:'200$',
            },
            {
                id:'2',
                title:'cuadro2',
                description:'hoola2',
                price:'300$',
            },
            {
                id:'3',
                title:'cuadro3',
                description:'hoola3',
                price:'100$',
            },
            {
                id:'4',
                title:'cuadro4',
                description:'hoola4',
                price:'350$',
            }
        ]
        };
    }
    
    render(){

        var paints = _.map(this.state.paintList, paint => {
            return (
                <Paint
                    key={ paint.id }
                    paint={ paint }
                    changePaint={this._changePaint}
                />
            );
        });
        return(

            <RX.View style={_styles.BigBox}>

            <RX.View style={_styles.Box1}>
                <RX.Text style={_styles.Titulo}>
                    PAINTINGS
                    </RX.Text>
                    <RX.View style={_styles.CuadroDetalle}>
                    <RX.Image source='../../assets/img/fondo' style={_styles.Cuadro}>

                        </RX.Image>
                        <RX.Text style={_styles.TitleText}>
                        {this.state.paint.title}    

                        </RX.Text>
                        <RX.Text style={_styles.Text}>
                            {this.state.paint.description}    
                          </RX.Text>
                          <RX.Text style={_styles.TitlePrice}>
                            {this.state.paint.price}    

                        </RX.Text>
                    </RX.View>

            </RX.View>
                    <RX.View style={_styles.Box2}>
                          
                              {paints}

                   </RX.View>
                   


            </RX.View>
        )
    }

    private _changePaint=(p:PaintListItemInfo)=>{
        this.setState({
            paint: p
                })
    }
}
export = Paintings;