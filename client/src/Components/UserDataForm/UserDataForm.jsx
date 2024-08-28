import React from 'react'
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";


function UserDataForm() {
    const [selected, setSelected] = useState("");

    return (
        <div >
            <div style={{ margin: '5px', width: 'full', color: 'rgb(244,246,249)' }}>
                <input style={{ width: '100%', height: '6vh', border: '1.5px solid black', paddingLeft: '15px' }} onMouseOver={(e) => e.currentTarget.style.border = '2px solid black'}
                    onMouseOut={(e) => e.currentTarget.style.border = '1.5px solid black'} type='text' placeholder='Email' />
            </div>
            <div style={{ margin: '5px', display: 'flex', justifyContent: 'space-between' }}>
                <input style={{ width: '48%', height: '6vh', border: '1.5px solid black', paddingLeft: '15px' }} onMouseOver={(e) => e.currentTarget.style.border = '2px solid black'}
                    onMouseOut={(e) => e.currentTarget.style.border = '1.5px solid black'} type='text' placeholder='First Name' />
                <input style={{ width: '48%', height: '6vh', border: '1.5px solid black', paddingLeft: '15px' }} onMouseOver={(e) => e.currentTarget.style.border = '2px solid black'}
                    onMouseOut={(e) => e.currentTarget.style.border = '1.5px solid black'} type='text' placeholder='Last Name' />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }} >
                <input style={{ margin: '5px', height: '6vh', border: '1.5px solid black', paddingLeft: '15px' }} onMouseOver={(e) => e.currentTarget.style.border = '2px solid black'}
                    onMouseOut={(e) => e.currentTarget.style.border = '1.5px solid black'} type='text' placeholder='Address ' />
                <input style={{ margin: '5px', height: '6vh', border: '1.5px solid black', paddingLeft: '15px' }} onMouseOver={(e) => e.currentTarget.style.border = '2px solid black'}
                    onMouseOut={(e) => e.currentTarget.style.border = '1.5px solid black'} type='text' placeholder='Apartment, Suite, Unit, etc (Optional) ' />
                <input style={{ margin: '5px', height: '6vh', border: '1.5px solid black', paddingLeft: '15px' }} onMouseOver={(e) => e.currentTarget.style.border = '2px solid black'}
                    onMouseOut={(e) => e.currentTarget.style.border = '1.5px solid black'} type='text' placeholder='City ' />
            </div>


            <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'space-evenly', justifyContent: 'space-evenly', padding: '5px' }}>
                <div>
                    <h6>Country</h6>
                    <ReactFlagsSelect
                        selected={selected}
                        onSelect={(code) => setSelected(code)}
                        searchable
                        searchPlaceholder='Search Countries'
                    />;
                </div>
                <div>
                    <h6>Province</h6>
                    <input type='text' placeholder='Province' style={{ height: '40px', width: '300px', border: '1.5px solid black', marginRight: '15px', paddingLeft: '30px' }} />

                </div>


            </div>
            <div style={{
                marginLeft: '3rem', marginTop: '1rem', display: 'flex', flexDirection: 'row'
            }}>

                <input type='text' placeholder='ZIP code' style={{ height: '40px', width: '300px', border: '1.5px solid black', marginRight: '15px', paddingLeft: '30px' }} />
                <input type='text' placeholder='Phone (Optional) ' style={{ height: '40px', width: '300px', border: '1.5px solid black', paddingLeft: '30px' }} />
            </div>
        </div >
    )
}

export default UserDataForm