/*
* This file demonstrates a basic ReactXP app.
*/
// This example uses ExperimentalNavigation on iOS and Android

import RX = require('reactxp');
import Paintings = require('./routes/gallery/Paintings');

import Profile = require('./routes/Profile');
import Contact = require('./routes/Contact');
import Menu = require('./routes/Menu');
import Gallery = require('./routes/Gallery');
import Drawings = require('./routes/gallery/Drawings');
import Textiles =require('./routes/gallery/Textiles')

import Navbar =require('./components/Navbar');

import Navigator, { Types, NavigatorDelegateSelector as DelegateSelector } from 'reactxp-navigation';



const _styles={
    Background: RX.Styles.createImageStyle({
        flex: 1,
    }),
    Fondo: RX.Styles.createViewStyle({
        flex: 1,
        flexDirection:'row',
    }),
    Main: RX.Styles.createViewStyle({
        flex: 97,
    }),
    Navbar: RX.Styles.createViewStyle({
        flex: 3,
    }),
}


enum NavigationRouteId {
    Profile,
    Contact,
    Menu,
    Gallery,
    Paintings,
    Drawings,
    Textiles,
}


interface MenuState{
    isToggle: boolean;
    isGallery:boolean;
}



class App extends RX.Component<null, MenuState> {
    private _navigator: Navigator;

    constructor(props: null){
        super(props);
        this.state={
            isToggle: false,
            isGallery:false,
        }
    }
    componentDidMount() {
        // Now that the app is mounted, specify the initial
        // navigator route.
        this._navigator.immediatelyResetRouteStack([{
            routeId: NavigationRouteId.Profile,
            sceneConfigType: Types.NavigatorSceneConfigType.Fade
        }]);
    }


    render() {
        return (
            <RX.View style={_styles.Fondo}>

                    <RX.View style={_styles.Main}>
                   
                        <Navigator
                            ref={ this._onNavigatorRef }
                            renderScene={ this._renderScene }
                            delegateSelector={ DelegateSelector }

                        />

                    </RX.View>
           
                    <RX.View style={_styles.Navbar}>
   
                         <Navbar  onNavigateBack={this._onPressBack} onPressNavigateProfile={this._onPressNavigateProfile}  onPressNavigateGallery={this._onPressNavigateGallery} onPressNavigateContact={this._onPressNavigateContact} isToggle={this.state.isToggle} onPressNavigateMenu={this._onPressNavigateMenu }  />
                    </RX.View>

            </RX.View>
           )};
 

    private _onNavigatorRef = (navigator: Navigator) => {
        this._navigator = navigator;
    }
    
    private _renderScene = (navigatorRoute: Types.NavigatorRoute) => {
        switch (navigatorRoute.routeId) {
            case NavigationRouteId.Contact:
                return (
                    <RX.Image resizeMode='cover' style={_styles.Background}  source={'./src/assets/img/fondo.png'}>

                       <Contact  changeToggle={this._changeToggle} key='Contact' />  

                    </RX.Image>
                );

            case NavigationRouteId.Profile:
                return (
                    <RX.Image key='Profile' resizeMode='cover' style={_styles.Background} source={'./src/assets/img/fondo.png'}>

                       <Profile  changeToggle={this._changeToggle} onPressNavigateGallery={this._onPressNavigateGallery} />

                    </RX.Image>
                );

            case NavigationRouteId.Gallery:
                return (
                    <RX.Image key='Gallery'  resizeMode='cover' style={_styles.Background}  source={'./src/assets/img/fondo.png'}>

                    <Gallery onPressNavigateTextiles={this._onPressNavigateTextiles}  onPressNavigateDrawings={this._onPressNavigateDrawings} onPressNavigatePaintings={this._onPressNavigatePaintings} changeToggle={this._changeToggle} />

                    </RX.Image>
                )

            case NavigationRouteId.Menu:
                return (
                    <RX.Image  key='Menu' resizeMode='cover' style={_styles.Background}  source={'./src/assets/img/fondo.png'}>
                            <Menu  onPressNavigateProfile={this._onPressNavigateProfile}  onPressNavigateGallery={this._onPressNavigateGallery} onPressNavigateContact={this._onPressNavigateContact}  isToggle={this.state.isToggle} changeToggle={this._changeToggle}  />
                    </RX.Image>

                )
                case NavigationRouteId.Paintings:
                return (
                    <RX.Image  key='Paintings' resizeMode='cover' style={_styles.Background}  source={'./src/assets/img/fondo.png'}>
                            <Paintings changeToggle={this._changeToggle}/>
                    </RX.Image>

                )
                case NavigationRouteId.Drawings:
                return (
                    <RX.Image key='Drawings'  resizeMode='cover' style={_styles.Background}  source={'./src/assets/img/fondo.png'}>
                            <Drawings changeToggle={this._changeToggle} />
                    </RX.Image>

                )
                case NavigationRouteId.Textiles:
                return (
                    <RX.Image  key='Textiles'  resizeMode='cover' style={_styles.Background}  source={'./src/assets/img/fondo.png'}>
                            <Textiles changeToggle={this._changeToggle}/>
                    </RX.Image>

                )
        }

        return null;
    }

    private _changeToggle=(p:boolean)=>{
        this.setState({
            isToggle:p
            })
    }


    private _onPressBack = () => {

        this._navigator.pop();
    }

    private _changeGallery =()=>{
        this.setState({isGallery: !this.state.isGallery})
    }

    private _onPressNavigateContact = () => {
        this._navigator.push({
            routeId: NavigationRouteId.Contact,
            sceneConfigType:
                Types.NavigatorSceneConfigType.FloatFromRight,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    private _onPressNavigateTextiles=()=>{
        this._navigator.push({
            routeId: NavigationRouteId.Textiles,
            sceneConfigType:
                Types.NavigatorSceneConfigType.FloatFromLeft,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    private _onPressNavigateDrawings=()=>{
        this._navigator.push({
            routeId: NavigationRouteId.Drawings,
            sceneConfigType:
                Types.NavigatorSceneConfigType.FloatFromLeft,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    private _onPressNavigateMenu = () => {
        this._navigator.push({
            routeId: NavigationRouteId.Menu,
            sceneConfigType:
                Types.NavigatorSceneConfigType.FloatFromLeft,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    private _onPressNavigateGallery = () => {
        this._navigator.push({
            routeId: NavigationRouteId.Gallery,
            sceneConfigType:
                Types.NavigatorSceneConfigType.FloatFromLeft,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    private _onPressNavigateProfile = () => {
        this._navigator.push({
            routeId: NavigationRouteId.Profile,
            sceneConfigType:
                Types.NavigatorSceneConfigType.FloatFromRight,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    private _onPressNavigatePaintings = () => {
        this._navigator.push({
            routeId: NavigationRouteId.Paintings,
            sceneConfigType:
                Types.NavigatorSceneConfigType.FloatFromRight,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }


}

export = App;
