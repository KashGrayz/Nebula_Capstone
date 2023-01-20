import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const SearchPage = () => {
    const [search, setSearch] = 

    const fetchNasa = async => {
        try {
            let response = await axios.get("https://images-api.nasa.gov/search?q=Nebula")
        }
    }
}