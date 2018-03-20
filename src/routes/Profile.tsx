import RX = require('reactxp');

const _styles={
    
    text: RX.Styles.createTextStyle({
        color:'red',
        fontSize: 36,
        fontWeight:'bold',
        textAlign:'center'
    }),
      Box1: RX.Styles.createViewStyle({
        flex: 47,        
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:80,
    }),
    Box2: RX.Styles.createViewStyle({
        flex: 47,        
        justifyContent:'center',
        alignItems:'center',
    }),
    LogoWindow: RX.Styles.createImageStyle({
        height:130,
        width:340,
    }),
    LogoMobile: RX.Styles.createImageStyle({
        height:120,
        width:200,
    }),    
     Valeria: RX.Styles.createImageStyle({
        height:100,
        width:100
    }),
    BigBox: RX.Styles.createViewStyle({
        flexDirection:'row',
        flex:1
    }),
    Text: RX.Styles.createTextStyle({
        fontFamily: 'Jenna Sue',
        fontSize:20,
        marginTop:40,
        textAlign:'center',
    }),
    Pintura:RX.Styles.createImageStyle({
        height:400,
        width:400,
    }),
    Cuadro:RX.Styles.createViewStyle({
        width:320,
        backgroundColor:'black',
         height:170,
         paddingTop: 20,
         paddingRight: 20,
         paddingBottom: 20,
         paddingLeft: 20,
         position: 'relative',
         marginTop:-100,
         marginLeft:-100,
         opacity:0.7,
         
    }),
    TextoCuadro: RX.Styles.createTextStyle({
      color: 'white',
      fontSize:18,
       fontFamily:'Jenna Sue'
    }),
    TituloCuadro: RX.Styles.createTextStyle({
      color: 'white',
      fontSize:30,
      fontFamily: 'Bintar',
      marginBottom: 8,
    }),
    Button: RX.Styles.createTextStyle({
        color: 'black',
         fontFamily:'MMA champ'
      }),
    Button2: RX.Styles.createTextStyle({
        color: 'white',
        fontFamily:'MMA champ'
      }),
    ButtonView: RX.Styles.createTextStyle({
        borderColor:'black',
        borderRadius:0,
        borderWidth:2,
        marginBottom: 20,
        paddingTop: 12,
        paddingLeft: 40,
        paddingRight:40,
        paddingBottom:12,
        marginTop:30,
      }),
   
     ButtonView2: RX.Styles.createTextStyle({
        borderColor:'black',
        backgroundColor:'black',
        borderRadius:0,
        borderWidth:2,
        marginBottom: 20,
        paddingTop: 12,
        paddingLeft: 40,
        paddingRight:40,
        paddingBottom:12,
        marginTop:30,
    }),

}


interface MainPanelProps {
    onPressNavigateGallery: () => void;
    changeToggle:(p:boolean)=>void;
}


interface ButtonHoverState{
    isHover?: boolean;
}




class Profile extends RX.Component <MainPanelProps,ButtonHoverState>{
    constructor(props: MainPanelProps){
        super(props);
        this.state={
            isHover: false,
        }
    }
    componentDidMount(){
        this.props.changeToggle(false)
    }
    render(){
        var ButtonView=this.state.isHover?_styles.ButtonView2:_styles.ButtonView;
        var ButtonStyle=this.state.isHover?_styles.Button2:_styles.Button;
        var logoStyle = (RX.UserInterface.measureWindow().width<375) ? 
        _styles.LogoMobile : _styles.LogoWindow;

        return(

            <RX.View style={_styles.BigBox} key='BigBox'>

            <RX.View style={_styles.Box1} key='Menu3'>

                    <RX.Image style={logoStyle} source={'./src/assets/img/LogoValeria.png'}>
                    </RX.Image>
                    
                    <RX.Image style={_styles.Valeria} source={'./src/assets/img/ImagenValeria.png'}>
                    </RX.Image>

                    <RX.View style={_styles.Text}>
                    <RX.Text >
                    Lorem ipsum es el texto que se usa habitualmente en           
                   </RX.Text>
                    <RX.Text >
                    de tipografías o de borradores de diseño para probar 
                    </RX.Text>
                    <RX.Text >
                    diseño visual antes de insertar el texto final. Aunque no posee 
                    </RX.Text>
                    <RX.Text >
                    de tipografías o de borradores de diseño para probar 
                    </RX.Text>
                    <RX.Text >
                    diseño visual antes de insertar el texto final. Aunque no posee 
                    </RX.Text>
                    </RX.View>
                    <RX.View style={ButtonView} onMouseLeave={this._onChangeHover} onMouseEnter={this._onChangeHover}>
                    <RX.Button style={ButtonStyle} onPress={ this._onPressNavigateGallery }>
                        SEE GALLERY
                        </RX.Button>
                      
                        </RX.View>
                           
        </RX.View>

        <RX.View style={_styles.Box2} key='Menu4'>
        <RX.Image style={_styles.Pintura} source={'./src/assets/img/Pintura.png'}>
                    </RX.Image>
                    <RX.View style={_styles.Cuadro}>
                    <RX.Text  style={_styles.TituloCuadro}>
                   Nenufares
                    </RX.Text  >
                    <RX.Text style={_styles.TextoCuadro} >
                    Lorem ipsum es el texto que se usa habitualmente en           
                   </RX.Text>
                    <RX.Text  style={_styles.TextoCuadro}>
                    de tipografías o de borradores de diseño para probar 
                    </RX.Text>
                    <RX.Text  style={_styles.TextoCuadro}>
                    diseño visual antes de insertar el texto final.
                    </RX.Text>
                        </RX.View>
        </RX.View>
        
        </RX.View>
        )
    };

    

    private _onPressNavigateGallery = () => {
        this.props.onPressNavigateGallery();
    }

    


    private _onChangeHover=()=>{
         this.setState({isHover:!this.state.isHover})
    }


    // private _onToggleState= (e: RX.Types.SyntheticEvent)=>{
    //     e.stopPropagation();
    //     this.setState({isStopped: !this.state.isStopped})
    //     console.log(this.state.isStopped)
    // }

}

export=Profile;