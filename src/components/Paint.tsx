import RX= require('reactxp')

const _styles={
    Cuadros: RX.Styles.createViewStyle({
        width:260,
        height:300,
        backgroundColor:'black',
        marginRight:30,
        marginTop:30,

    }),
    Text: RX.Styles.createTextStyle({
        color:'white'
    })
}

interface ItemInfo{
    title?:String;
    description?: String;
    price?: String;
}
interface paintProps{
    paint: ItemInfo;
    changePaint:(p:ItemInfo)=>void;
}

class Paint extends RX.Component <paintProps,{}>{
    render(){
        return(
            <RX.View onMouseEnter={this._changePaint} style={_styles.Cuadros}>
                <RX.Text  style={_styles.Text}>
                        {this.props.paint.title}
                </RX.Text>
            </RX.View>
        )
    }
    private _changePaint=()=>{
        this.props.changePaint(this.props.paint)
    }
}

export=Paint;