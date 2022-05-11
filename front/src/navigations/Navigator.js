import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Accueil from '../screens/Accueil'
import login from '../screens/login'

import roleAdmin from '../screens/roleAdmin'
import managingTeacher from '../screens/managingTeacher'
import managingEtd from '../screens/managingEtd'
import loginEns from '../screens/loginEns'
import roleEns from '../screens/roleEns'
import managingModules from '../screens/managingModules'
import managingMatieres from '../screens/managingMatieres'

import loginEt from '../screens/loginEt'
import register from '../screens/register'
import registerEtd from '../screens/registerEtd'
import registerEns from '../screens/registerEns'

import Home from '../screens/Home'
import Cources from '../screens/Cources'
import Xd from '../screens/Xd'
import XD2 from '../screens/XD2'
import VideoPage from '../screens/VideoPage'
import C from '../screens/C'
import cpp from '../screens/C++'
import Python from '../screens/Python'
import css from '../screens/css'
import AE from '../screens/AE'
import html from '../screens/html'
import ReactNative from '../screens/ReactNative'
import ps from '../screens/ps'
import addMatiere from '../screens/addMatiere'
import deleteMatiere from '../screens/deleteMatiere'

//import drawer from '../screens/drawer'
import java from '../screens/java'
import FAB from '../screens/FAB'
import cpp2 from '../screens/C++2'
import docker from '../screens/docker'
import angular from '../screens/angular'
import nodejs from '../screens/nodejs'
import addTeacher from '../screens/addTeacher'
import deleteTeacher from '../screens/deleteTeacher'
import addStudent from '../screens/addStudent'
import deleteStudent from '../screens/deleteStudent'

import videoJavaBoucles from '../screens/videoJavaBoucles'
import videoJavaConditions from '../screens/videoJavaConditions'
import videoJavaOperators from '../screens/videoJavaOperators'
import videoJavaIntroduction from '../screens/videoJavaIntroduction'

import videoNodejsFirstServer from '../screens/videoNodejsFirstServer'
import videoNodejsIntro from '../screens/videoNodejsIntro'
import videoNodejsModules from '../screens/videoNodejsModules'
import videoNodejsStreams from '../screens/videoNodejsStreams'
import videoNodejsInstallation from '../screens/videoNodejsInstallation'

import CppBoucles from '../screens/CppBoucles'
import CppConditions from '../screens/CppConditions'
import CppIntro from '../screens/CppIntro'
import CppOperators from '../screens/CppOperators'
import CppVariables from '../screens/CppVariables'

import CppBouclesEtd from '../screens/CppBouclesEtd'
import CppConditionsEtd from '../screens/CppConditionsEtd'
import CppIntroEtd from '../screens/CppIntroEtd'
import CppOperatorsEtd from '../screens/CppOperatorsEtd'
import CppVariablesEtd from '../screens/CppVariablesEtd'

import pythonIntro from '../screens/pythonIntro'
import pythonVariables from '../screens/pythonVariables'
import pythonOperators from '../screens/pythonOperators'
import pythonConditions from '../screens/pythonConditions'
import pythonBoucles from '../screens/pythonBoucles'
import pythonFunctions from '../screens/pythonFunctions'
import pythonObject from '../screens/pythonObject'
import pythonMethods from '../screens/pythonMethods'


import videoCboucles from '../screens/videoCboucles'
import videoCconditions from '../screens/videoCconditions'
import videoCfunctions from '../screens/videoCfunctions'
import videoCIntro from '../screens/videoCIntro'
import videoCpointer from '../screens/videoCpointer'
import videoCstrings from '../screens/videoCstrings'
import videoCvariables from '../screens/videoCvariables'

import videoDockerInit from '../screens/videoDockerInit'
import videoDockerImage from '../screens/videoDockerImage'
import videoDockerVolumes from '../screens/videoDockerInit'
import videoDockerConteneur from '../screens/videoDockerConteneur'

import videoAngularInit from '../screens/videoAngularInit'
import videoAngularComposantes from '../screens/videoAngularComposantes'
import videoAngularComposites from '../screens/videoAngularComposites'
import videoAngularModules from '../screens/videoAngularModules'

import videoAeInit from '../screens/videoAeInit'
import videoAePresentation from '../screens/videoAePresentation'
import videoAeVariables from '../screens/videoAeInit'
import videoAeComposites from '../screens/videoAeComposites'
import videoAeCalques from '../screens/videoAeCalques'

import profile from '../screens/profile'
import profileAdmin from '../screens/profileAdmin'

const stackNavigatorOptions = {
    headerShown: false
}
const AppNavigator = createStackNavigator({
    Accueil: { screen: Accueil },
    login: { screen: login },
    register: { screen: register },
    registerEns: { screen: registerEns },
    registerEtd: { screen: registerEtd },
    roleAdmin: { screen: roleAdmin },
    managingTeacher: { screen: managingTeacher },
    managingEtd: { screen: managingEtd },
    loginEns: { screen: loginEns },
    roleEns: { screen: roleEns },
    managingModules: { screen: managingModules },
    managingMatieres: { screen: managingMatieres },

    loginEt: { screen: loginEt },

    Home: { screen: Home },
    Cources: { screen: Cources },
    C: { screen: C },
    cpp: { screen: cpp },
    Python: { screen: Python },
    ReactNative: { screen: ReactNative },
    html: { screen: html },
    css: { screen: css },
    AE: { screen: AE },
    ps: { screen: ps },
    Xd: { screen: Xd },
    XD2: { screen: XD2 },
    addMatiere: { screen: addMatiere },
    deleteMatiere: { screen: deleteMatiere },


    java: { screen: java },
    FAB: { screen: FAB },
    cpp2: { screen: cpp2 },
    docker: { screen: docker },
    angular: { screen: angular },
    nodejs: { screen: nodejs },
    addTeacher: { screen: addTeacher },
    deleteTeacher: { screen: deleteTeacher },
    addStudent: { screen: addStudent },
    deleteStudent: { screen: deleteStudent },

    VideoPage: { screen: VideoPage },
    videoJavaBoucles: { screen: videoJavaBoucles },
    videoJavaConditions: { screen: videoJavaConditions },
    videoJavaIntroduction: { screen: videoJavaIntroduction },
    videoJavaOperators: { screen: videoJavaOperators },
    videoJavaConditions: { screen: videoJavaConditions },
    videoNodejsStreams: { screen: videoNodejsStreams },
    videoNodejsFirstServer: { screen: videoNodejsFirstServer },
    videoNodejsInstallation: { screen: videoNodejsInstallation },
    videoNodejsIntro: { screen: videoNodejsIntro },
    videoNodejsModules: { screen: videoNodejsModules },

    CppBoucles: { screen: CppBoucles },
    CppConditions: { screen: CppConditions },
    CppIntro: { screen: CppIntro },
    CppOperators: { screen: CppOperators },
    CppVariables: { screen: CppVariables },

    CppBouclesEtd: { screen: CppBouclesEtd },
    CppConditionsEtd: { screen: CppConditionsEtd },
    CppIntroEtd: { screen: CppIntroEtd },
    CppOperatorsEtd: { screen: CppOperatorsEtd },
    CppVariablesEtd: { screen: CppVariablesEtd },

    videoCboucles: { screen: videoCboucles },
    //videoCcompiler: { screen: videoCcompiler },
    videoCconditions: { screen: videoCconditions },
    videoCfunctions: { screen: videoCfunctions },
    videoCIntro: { screen: videoCIntro },
    videoCpointer: { screen: videoCpointer },
    videoCstrings: { screen: videoCstrings },
    videoCvariables: { screen: videoCvariables },

    videoDockerInit: { screen: videoDockerInit },
    videoDockerImage: { screen: videoDockerImage },
    videoDockerVolumes: { screen: videoDockerVolumes },
    videoDockerConteneur: { screen: videoDockerConteneur },

    videoAeInit: { screen: videoAeInit },
    videoAePresentation: { screen: videoAePresentation },
    videoAeVariables: { screen: videoAeVariables },
    videoAeComposites: { screen: videoAeComposites },
    videoAeCalques: { screen: videoAeCalques },

    pythonIntro: { screen: pythonIntro },
    pythonVariables: { screen: pythonVariables },
    pythonOperators: { screen: pythonOperators },
    pythonConditions: { screen: pythonConditions },
    pythonBoucles: { screen: pythonBoucles },
    pythonFunctions: { screen: pythonFunctions },
    pythonObject: { screen: pythonObject },
    pythonMethods: { screen: pythonMethods },



    videoAngularInit: { screen: videoAngularInit },
    videoAngularModules: { screen: videoAngularModules },
    videoAngularComposantes: { screen: videoAngularComposantes },
    videoAngularComposites: { screen: videoAngularComposites },

    profile: { screen: profile },
    profileAdmin: { screen: profileAdmin }
},
    {
        initialRouteName: "Accueil",

        defaultNavigationOptions: stackNavigatorOptions
    }
)
export default createAppContainer(AppNavigator);