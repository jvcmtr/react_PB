import styled from "styled-components";
import {theme} from "../../defaultCss.js"
import { useState, useEffect } from 'react';
import {Navigate} from 'react-router-dom'
import DataHelper from "/data/DataHelper.js"
  const DH = new DataHelper()

export default function MainExplorar(props){

    return(<Navigate to="/login" /> )
}