import React from 'react'

import cssModule from './styles/table.module.css'

import Navbar from './components/userNavbar'

import check from './photos/check.png'
import cross from './photos/cross.png'

const table = () => {
    return (
        <div>
            <Navbar />
            <div className={cssModule.mainContainer}>
                <p className={cssModule.header}>Income Transaction</p>
                <div className={cssModule.tableContainer}>
                    <table className={cssModule.table}>
                        <tr>
                            <th className={cssModule.noH}>No</th>
                            <th className={cssModule.nameH}>Name</th>
                            <th className={cssModule.addressH}>Address</th>
                            <th className={cssModule.orderedH}>Ordered Products</th>
                            <th className={cssModule.statusH}>Status</th>
                            <th className={cssModule.actionH}>Action</th>
                        </tr>
                        <tr>
                            <td className={cssModule.no} >1</td>
                            <td className={cssModule.name}>Sugeng No Pants</td>
                            <td className={cssModule.address}>Cileungsi</td>
                            <td className={cssModule.ordered}>Paket Geprek, Paket ke..</td>
                            <td className={cssModule.status}>Waiting Approve</td>
                            <td className={cssModule.action}>
                                <div className={cssModule.btnContainer}>
                                    <button className={cssModule.cancel}>Cancel</button>
                                    <button className={cssModule.approve}>Approve</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cssModule.no}>2</td>
                            <td className={cssModule.name}>Haris Gams</td>
                            <td className={cssModule.address}>Serang</td>
                            <td className={cssModule.ordered}>Paket Geprek, Paket ke..</td>
                            <td className={cssModule.status}>Success</td>
                            <td className={cssModule.action}>
                                <div className={cssModule.btnContainer}>
                                    <img className={cssModule.check} src={check} alt="" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cssModule.no}>3</td>
                            <td className={cssModule.name}>Aziz Union</td>
                            <td className={cssModule.address}>Bekasi</td>
                            <td className={cssModule.ordered}>Paket Geprek, Paket ke..</td>
                            <td className={cssModule.status}>Canceled</td>
                            <td className={cssModule.action}>
                                <div className={cssModule.btnContainer}>
                                    <img className={cssModule.cross} src={cross} alt="" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={cssModule.no}>4</td>
                            <td className={cssModule.name}>Lae Tanjung Balai</td>
                            <td className={cssModule.address}>Tanjung Balai</td>
                            <td className={cssModule.ordered}>Paket Geprek, Paket ke..</td>
                            <td className={cssModule.status}>On The Way</td>
                            <td className={cssModule.action}>
                                <div className={cssModule.btnContainer}>
                                    <img className={cssModule.check} src={check} alt="" />
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default table
