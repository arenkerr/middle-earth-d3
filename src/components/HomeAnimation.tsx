import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/animation.scss';

const HomeAnimation = () => {
    return ( 
        <svg id="home" version="1.1" x="0px" y="0px" width="1000px"
        height="1200px" viewBox="0 0 600 800" enable-background="new 0 0 600 800">

        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M334.567,85.778
        c0,50.537-33.547,19.417-33.547,77.058"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M326.677,202.563
        c24.78,14.278,9.428,43.852,9.428,43.852"/>
        <Link to="/elves" class="link">
            <text x="538" y="460">Elves</text>
            <path id="elves" fill="#912400" d="M564,480.801c0,1.991-1.597,3.588-3.588,3.588s-3.588-1.597-3.588-3.588
            s1.597-3.588,3.588-3.588S564,478.81,564,480.801z"/>
        </Link>
        <Link to="/men/atani">
            <text x="-14" y="354">Men: Atani</text>
            <path id="men2" fill="#912400" d="M37.134,374.374c0,1.949-1.597,3.546-3.546,3.546c-1.991,0-3.588-1.597-3.588-3.546
            c0-1.991,1.597-3.588,3.588-3.588C35.537,370.786,37.134,372.383,37.134,374.374z"/>
        </Link>
        <Link to="/dwarves">
            <text x="54" y="174">Dwarves</text>
            <path id="dwarves" fill="#912400" d="M95.128,192.609c0,1.991-1.639,3.588-3.588,3.588c-1.991,0-3.588-1.597-3.588-3.588
            c0-1.949,1.597-3.546,3.588-3.546C93.489,189.063,95.128,190.66,95.128,192.609z"/>
        </Link>
        <Link to="/Hobbits">
            <text x="486" y="254">Hobbits</text>
            <path id="hobbits" fill="#912400" d="M517.525,272.291c0,1.949-1.597,3.546-3.588,3.546s-3.588-1.597-3.588-3.546
            c0-1.991,1.597-3.588,3.588-3.588S517.525,270.3,517.525,272.291z"/>
        </Link>
        <Link to="/men/atanatari">
            <text x="50" y="582">Men: Atanatari</text>
            <path id="men1" fill="#912400" d="M128.293,549.719c0,1.991-1.597,3.588-3.588,3.588s-3.588-1.597-3.588-3.588
            s1.597-3.588,3.588-3.588S128.293,547.728,128.293,549.719z"/>
        </Link>
        <Link to="/all">
            <text x="282" y="36">All</text>
            <path id="all" fill="#912400" d="M302.004,55.215c0,1.942-1.621,3.5-3.541,3.5c-1.901,0-3.459-1.558-3.459-3.5s1.558-3.5,3.459-3.5
            C300.383,51.715,302.004,53.272,302.004,55.215z"/>
        </Link>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M309.677,101.166
        c9.44,7.577,3.591,23.271,3.591,23.271"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M329.912,133.473
        c-2.727-10.416-16.783-8.732-16.783-8.732"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M328.345,87.977
        c4.011-0.828,5.665,6.644,5.665,6.644"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M340.203,91.686
        c-2.828-2.569-6.168,3.089-6.168,3.089"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M324.498,97.961
        c6.054,3.733,4.095,14.468,4.095,14.468"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M338.887,116.244
        c-2.473-6.344-10.347-3.604-10.347-3.604"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M131.068,418.904
        c-3.568-8.038-15.991-1.693-15.991-1.693"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M109.711,401.204
        c7.406-1.681,5.701,15.667,5.701,15.667"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M117.447,444.165
        c-8.613,2.21-8.13,13.565-8.13,13.565"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M85.088,446.702
        c15.907-6.087,22.25,11.599,22.25,11.599"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M25.043,483.875
        c6.083,9.936,19.538,5.953,19.538,5.953"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M46.163,509.415
        c-9.841-9.146-1.582-19.587-1.582-19.587"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M57.829,457.27
        c3.52,19.21,20.434,20.206,20.434,20.206"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M74.304,501.193
        c-9.352-14.234,5.979-22.312,5.979-22.312"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M125.101,527.616
        c4.905,9.203,16.967,6.458,16.967,6.458"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M142.434,551.468
        c-8.17-8.623-0.366-17.394-0.366-17.394"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M149.141,517.955
        c5.359,6.378,13.242,6.255,13.242,6.255"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M161.362,539.667
        c-4.511-7.075,0.556-14.151,0.556-14.151"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M245.989,437.707
        c-1.568-13.952-16.796-2.929-16.796-2.929"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M219.847,420.829
        c11.801-2.736,9.347,13.949,9.347,13.949"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M239.591,467.373
        c-20.034-0.521-17.306,17.002-17.213,15.873"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M197.078,471.838
        c15.854-6.223,22.326,11.625,22.326,11.625"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M260.375,256.472
        c-5.304-7.271-14.236-2.364-14.236-2.364"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M241.925,238.468
        c7.833,6.162,3.213,15.639,3.213,15.639"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M259.164,277.643
        c-14.498,2.118-16.244,15.705-16.244,15.705"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M219.752,286.513
        c14.611-8.751,20.234,6.351,20.234,6.351"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M171.397,231.544
        c-5.146-6.147-14.943-1.769-14.943-1.769"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M154.078,216.401
        c7.902,5.149,2.376,13.374,2.376,13.374"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M163.833,249.875
        c-13.358-0.833-15.778,12.498-15.778,12.498"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M133.186,253.036
        c9.814-1.786,11.891,9.336,11.891,9.336"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M333.171,198.327
        c-2.87,3.763,1.738,10.671,1.738,10.671"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M326.982,210.902
        c1.722-5.71,7.927-1.903,7.927-1.903"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M350.981,221.91
        c-8.09-0.659-10.29,8.505-10.29,8.505"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M331.62,224.903
        c6.686-3.112,9.071,5.512,9.071,5.512"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M165.467,502.599
        c3.832,15.559,17.15,16.912,17.15,16.912"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M179.759,537.948
        c-7.265-11.349,2.002-16.421,2.002-16.421"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M242.919,446.028
        c-13.05-5.151-21.073,8.815-21.073,8.815"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M212.488,440.062
        c7.241,2.625,8.018,14.274,8.018,14.274"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M124.291,426.625
        c-13.384-2.677-15.457,5.797-15.457,5.797"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M97.591,419.988
        c10.282,1.887,10.237,12.434,10.237,12.434"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M59.999,502.704c0,0-8.943-9.358-1.348-20.237
        "/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M44.472,471.928
        c0,0,2.119,12.705,13.473,10.56"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M256.361,263.818
        c-10.527-3.112-14.913,9.017-14.913,9.017"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M226.373,260.465
        c10.487-2.723,13.391,12.712,13.391,12.712"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M166.083,236.465
        c-8.571-7.112-16.193,3.835-16.193,3.835"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M139.195,231.283
        c9.43-1.721,10.524,8.757,10.524,8.757"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M112.189,318.459
        c-7.365-3.167-7.686-14.966-7.686-14.966"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M91.5,305.439
        c7.199,6.094,13.71-2.788,13.71-2.788"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M131.5,302.375
        c-7-11.562-1.368-16.066-1.368-16.066"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M122.452,274.158
        c-1.064,11.782,7.68,9.252,7.68,9.252"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M119.312,307.75
        c-9.271-6.172-4.232-15.348-4.232-15.348"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M105.678,283.664
        c-1.767,9.024,9.402,6.691,9.402,6.691"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M201.785,372.38
        c-8.983-0.546-9.667-10.714-9.667-10.714"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M176.214,367.393
        c9.414,3.274,14.903-5.727,14.903-5.727"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M220.252,358.103
        c-6.035-13.352,1.33-20.661,1.33-20.661"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M207.312,319.59
        c0.509,17.024,11.796,15.533,11.796,15.533"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M210.033,368.013
        c-11.108-9.555-4.6-21.252-4.6-21.252"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M187.262,340.29
        c3.362,10.3,16.524,5.292,16.524,5.292"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M351.502,323.633
        c6.331-7.794,16.992-2.535,16.992-2.535"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M372.328,304.335
        c-9.349,6.605-3.834,16.763-3.834,16.763"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M355.334,350.613
        c17.305,2.27,19.152,18.063,19.152,18.063"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M402.375,361.192
        c-17.439-9.38-25.613,7.484-25.613,7.484"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M351.951,335.661
        c16.752-4.504,24.429,8.308,24.429,8.308"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M394.473,331.128
        c-12.518-2.919-16.958,11.841-16.958,11.841"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M412.462,452.095
        c8.996,0.272,10.602-9.791,10.602-9.791"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M437.384,449.362
        c-9.672,2.404-14.32-7.059-14.32-7.059"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M394.556,434.115
        c7.224-12.748-2.576-22.542-2.576-22.542"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M410.944,396.938
        c-2.055,16.907-16.676,13.557-16.676,13.557"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M403.831,444.912
        c11.931-8.505,5.456-21.775,5.456-21.775"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M429.029,419.375
        c-4.284,9.952-18.358,3.444-18.358,3.444"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M436.752,302.419
        c4.963-6.628,13.317-2.155,13.317-2.155"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M453.075,286.006
        c-7.327,5.618-3.006,14.257-3.006,14.257"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M439.756,325.367
        c13.562,1.931,15.121,14.752,15.121,14.752"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M476.625,334.365
        c-13.669-7.978-20.006,6.366-20.006,6.366"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M437.104,312.649
        c13.131-3.831,19.76,7.978,19.76,7.978"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M470.431,308.794
        c-9.811-2.482-13.567,10.921-13.567,10.921"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M494.778,417.029
        c8.998,0.184,10.504-9.895,10.504-9.895"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M519.672,414.051
        c-9.647,2.5-14.39-6.916-14.39-6.916"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M476.695,399.229
        c7.097-12.819-3.862-23.333-3.862-23.333"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M492.714,361.89
        c-1.887,16.927-18.498,12.294-18.498,12.294"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M486.077,409.934
        c11.846-8.623,5.429-21.753,5.429-21.753"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M511.021,384.147
        c-4.186,9.994-18.307,3.355-18.307,3.355"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M426.756,692.77
        c10.78-4.415,9.003-18.334,9.003-18.334"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M454.346,676.008
        c-10.603,8.252-19.587-1.572-19.587-1.572"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M402.707,669.605
        c11.595-15.716-0.684-29.452-0.684-29.452"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M428.449,625.529
        c-3.966,16.807-22.754,11.931-22.754,11.931"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M418.809,686.281
        c14.728-12.825,5.855-28.623,5.855-28.623"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M448.187,649.707
        c-7.475,15.305-21.646,7.216-21.646,7.216"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M352.078,542.662
        c9.792-6.311,20.186,3.116,20.186,3.116"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M382.189,528.819
        c-12.836,3.969-9.926,16.959-9.926,16.959"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M355.006,572.752
        c19.523-0.508,23.893,17.922,23.893,17.922"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M405.379,578.917
        c-16.186-6.592-22.817,12.084-22.817,12.084"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M350.553,550.003
        c18.948-4.731,27.212,12.312,27.212,12.312"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M399.359,546.858
        c-17.259-2.635-20.165,14.594-20.165,14.594"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M500.25,504.547
        c-9.445,0.564-7.382,12.581-7.382,12.581"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M475.891,515.346
        c11.103-7.563,15.978,1.782,15.978,1.782"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M518.673,532.274
        c-19.513-0.835-22.483,17.062-22.483,17.062"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M472.188,538.585
        c15.955-5.957,21.814,10.929,21.814,10.929"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M473.891,524.301
        c0,0,11.111-6.642,20.031,3.181"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M507.348,515.995
        c0,0-12.041-0.755-12.47,10.791"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M574.965,590.875
        c-6.084,9.936-19.539,5.953-19.539,5.953"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M553.845,616.415
        c9.841-9.146,1.581-19.587,1.581-19.587"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M542.179,564.27
        c-3.52,19.21-19.615,18.521-19.615,18.521"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M525.703,608.193
        c9.352-14.234-4.779-23.556-4.779-23.556"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M540.009,609.704
        c0,0,8.943-9.358,1.348-20.237"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M555.536,578.928
        c0,0-0.206,12.466-11.561,10.32"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M345.868,210.156
        c-5.851,1.531-5.6,9.284-5.6,9.284"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M330.105,216.974
        c5.948-3.641,10.163,2.466,10.163,2.466"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M371.34,278.955
        c-2.021-28.528-37.228-28.042-37.228-28.042"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M377.987,274.963
        c-4.639,0.938-9.195-6.225-9.195-6.225"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M363.972,275.038
        c5.889,0.945,4.82-6.299,4.82-6.299"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M364.552,248.641
        c-2.94,7.565-13.57,5.234-13.57,5.234"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M353.403,264.75
        c5.72-4.654-2.422-10.875-2.422-10.875"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M372.893,258.375
        c-3.933,4.594-10.798,1.675-10.798,1.675"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M359.874,269.576
        c5.873-3.76,2.221-9.526,2.221-9.526"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M362.677,193.63
        c19.421,11.977,7.389,36.785,7.389,36.785"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M367.767,190.077
        c-2.25,3.156,1.362,8.952,1.362,8.952"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M362.916,200.625
        c1.35-4.79,6.213-1.597,6.213-1.597"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M381.725,209.859
        c-6.34-0.553-8.139,7.435-8.139,7.435"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M366.551,212.37
        c5.239-2.61,7.035,4.924,7.035,4.924"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M377.717,200
        c-4.585,1.284-4.769,7.28-4.769,7.28"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M365.364,205.719
        c4.661-3.054,7.584,1.561,7.584,1.561"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M405.535,245.327
        c-9.47-20.76-35.581-11.906-35.581-11.906"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M409.693,240.719
        c-3.412,1.84-8.713-2.465-8.713-2.465"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M398.623,244.219
        c4.921-0.743,2.357-5.966,2.357-5.966"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M391.801,224.409
        c-0.24,6.359-8.811,6.973-8.811,6.973"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M387.423,239.152
        c3.241-4.875-4.699-7.754-4.699-7.754"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M401.086,229.611
        c-1.845,4.39-8.273,3.385-8.273,3.385"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M393.874,241.157
        c3.61-4.245-1.062-8.16-1.062-8.16"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M282.283,138.7
        c-19.605,11.794-8.723,36.591-8.723,36.591"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M233.418,118.997
        c-6.391-1.288-9.026,10.342-9.026,10.342"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M214.522,124.77
        c4.508-3.999,9.83,4.809,9.83,4.809"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M277.145,135.201
        c2.271,3.108-1.375,8.815-1.375,8.815"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M282.041,145.588
        c-1.362-4.716-6.271-1.572-6.271-1.572"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M263.054,154.681
        c6.4-0.544,7.567,7.755,7.567,7.755"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M278.372,157.153
        c-5.29-2.571-7.751,5.283-7.751,5.283"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M267.1,144.972
        c4.628,1.265,4.43,7.669,4.43,7.669"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M279.57,150.604
        c-4.706-3.007-8.041,2.037-8.041,2.037"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M244.948,199.499
        c1.598-23.565,26.057-22.776,26.057-22.776"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M239.688,196.201
        c3.67,0.775,6.994-5.142,6.994-5.142"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M250.777,196.263
        c-4.659,0.781-4.094-5.203-4.094-5.203"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M250.318,174.458
        c2.326,6.249,10.215,4.212,10.215,4.212"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M259.138,187.765
        c-4.525-3.845,1.639-9.16,1.639-9.16"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M243.719,182.499
        c3.111,3.795,8.542,0.811,8.542,0.811"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M254.019,191.751
        c-4.646-3.106-1.757-8.441-1.757-8.441"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M252.592,130.495
        c-16.259,10.922-5.188,31.941-5.188,31.941"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M248.565,127.56
        c1.78,2.607-1.078,7.395-1.078,7.395"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M252.403,136.273
        c-1.068-3.957-4.916-1.319-4.916-1.319"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M237.523,143.9
        c5.016-0.457,6.341,6.506,6.341,6.506"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M249.527,145.975
        c-4.145-2.156-5.625,4.647-5.625,4.647"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M240.693,135.756
        c3.627,1.061,3.472,6.433,3.472,6.433"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M250.466,140.48
        c-3.688-2.522-6.301,1.708-6.301,1.708"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M217.894,171.72
        c7.606-16.47,25.224-10.621,25.224-10.621"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M214.604,167.914
        c2.7,1.52,6.893-2.037,6.893-2.037"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M223.362,170.806
        c-3.893-0.614-1.865-4.928-1.865-4.928"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M228.76,154.441
        c0.19,5.253,6.971,5.76,6.971,5.76"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M232.224,166.62
        c-2.564-4.027,3.718-6.406,3.718-6.406"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M221.414,158.739
        c1.459,3.626,6.545,2.796,6.545,2.796"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M227.12,168.276
        c-2.856-3.507,0.84-6.741,0.84-6.741"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M271.958,66.498
        c0,38.26,25.777,14.699,25.777,58.338"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M290.887,78.147
        c-7.179,5.736-2.731,17.618-2.731,17.618"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M275.498,102.606
        c2.073-7.886,12.764-6.61,12.764-6.61"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M276.69,68.162
        c-3.05-0.626-4.308,5.03-4.308,5.03"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M267.672,70.97
        c2.151-1.945,4.69,2.339,4.69,2.339"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M279.615,75.721
        c-4.604,2.826-3.169,10.595-3.169,10.595"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M268.673,89.562
        c1.88-4.802,7.773-3.247,7.773-3.247"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M315.087,724.144"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M531.832,499.547
        c22.051,5.864,17.688,33.089,17.688,33.089"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M535.68,494.677
        c-1.243,3.671,3.887,8.178,3.887,8.178"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M534.079,506.175
        c-0.09-4.975,5.487-3.32,5.487-3.32"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M554.753,509.59
        c-6.229,1.3-5.401,9.853-5.401,9.853"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M540.948,516.371
        c4.263-4.01,8.431,3.337,8.431,3.337"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M548.07,501.307
        c-4.02,2.551-1.955,8.722-1.955,8.722"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M537.893,510.346
        c3.582-4.269,8.223-0.317,8.223-0.317"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M586.028,523.999
        c-19.382-12.04-36.649,9.793-36.649,9.793"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M586.939,517.86
        c-1.822,3.421-8.619,2.772-8.619,2.772"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M579.66,526.905
        c3.687-3.343-1.34-6.272-1.34-6.272"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M563.009,514.188
        c3.321,5.428-3.475,10.686-3.475,10.686"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M567.528,528.89
        c-0.001-5.854-8.207-3.854-8.207-3.854"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M573.621,513.379
        c0.895,4.676-5.015,7.399-5.015,7.399"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M574.01,526.985
        c0.655-5.533-5.403-6.207-5.403-6.207"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M482.221,285.122
        c22.528,3.619,20.924,31.144,20.924,31.144"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M485.561,279.889
        c-0.868,3.777,4.689,7.746,4.689,7.746"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M485.123,291.491
        c-0.589-4.942,5.127-3.856,5.127-3.856"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M506.034,292.811
        c-6.067,1.919-4.384,10.345-4.384,10.345"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M492.981,300.945
        c3.839-4.419,8.723,2.472,8.723,2.472"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M498.554,285.24
        c-3.743,2.943-1.068,8.875-1.068,8.875"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M489.337,295.257
        c3.134-4.606,8.148-1.142,8.148-1.142"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M539.24,298.736
        c-21.551-7.498-33.534,17.529-33.534,17.529"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M538.782,292.546
        c-1.027,3.738-7.802,4.595-7.802,4.595"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M533.664,302.968
        c2.862-4.071-2.684-5.826-2.684-5.826"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M514.629,294.212
        c4.431,4.567-1.047,11.187-1.047,11.187"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M522.263,307.564
        c-1.285-5.711-8.853-1.961-8.853-1.961"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M524.806,291.094
        c1.898,4.367-3.27,8.32-3.27,8.32"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M528.169,304.285
        c-0.574-5.543-6.633-4.871-6.633-4.871"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M61.201,380.344
        C40.476,382.799,40.19,408.49,40.19,408.49"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M61.124,386.139
        c-0.778-4.279-6.256-4.142-6.256-4.142"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M57.126,374.594
        c2.262,4.36-2.259,7.403-2.259,7.403"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M53.092,394.413
        c-5.779-3.317-10.767,3.165-10.767,3.165"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M37.714,389.765
        c6.015,0.109,4.458,8.015,4.458,8.015"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M55.629,389.154
        c-2.074-5.517-7.997-1.587-7.997-1.587"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M44.419,380.456
        c4.711-0.445,2.771,7.044,2.771,7.044"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M8.793,398.305
        c18.457-9.449,29.733,11.687,29.733,11.687"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M11.348,403.065
        c-1.185-3.978,3.475-6.9,3.475-6.9"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M9.745,391.282
        c-0.026,4.868,5.078,4.884,5.078,4.884"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M21.646,405.473
        c3.427-5.951,10.399-3.343,10.399-3.343"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M32.231,392.699
        c-5.003,3.423-0.3,9.113-0.3,9.113"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M17.257,402.52
        c-0.629-5.721,6.032-5.746,6.032-5.746"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M22.932,389.099
        c-4.147,2.241,0.698,7.374,0.698,7.374"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M122.243,202.387
        c-20.735,2.376-23.032,28.066-23.032,28.066"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M122.143,208.181
        c-0.762-4.282-6.241-4.165-6.241-4.165"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M118.189,196.622
        c2.245,4.369-2.287,7.395-2.287,7.395"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M114.08,216.425
        c-8.153-4.228-11.778,3.124-11.778,3.124"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M98.72,211.628
        c6.014,0.134,3.582,7.106,3.582,7.106"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M116.637,211.175
        c-2.053-5.525-8.432-1.687-8.432-1.687"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M105.46,202.435
        c4.713-0.427,2.745,7.054,2.745,7.054"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M68.324,221.815
        c17.735-10.742,28.908,10.059,28.908,10.059"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M71.212,226.381
        c-1.465-3.883,2.974-7.13,2.974-7.13"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M68.772,214.741
        c0.322,4.857,5.413,4.51,5.413,4.51"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M81.656,228.048
        c2.994-6.181,9.997-3.305,9.997-3.305"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M90.661,216.309
        c-3.877,3.121,0.286,8.434,0.286,8.434"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M77.067,225.415
        c-1.036-5.662,5.606-6.162,5.606-6.162"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M81.77,211.624
        c-3.976,2.531,1.223,7.305,1.223,7.305"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M376.215,187.847
        c12.384-1.222,14.649,15.486,14.649,15.486"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M377.396,184.214
        c-0.033,2.391,3.37,3.929,3.37,3.929"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M378.479,191.221
        c-0.872-2.868,2.288-3.078,2.288-3.078"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M389.742,188.866
        c-3.007,2.061-1.157,6.849-1.157,6.849"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M383.727,195.695
        c1.54-3.221,4.917,0.167,4.917,0.167"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M384.908,185.462
        c-1.655,2.324,0.438,5.47,0.438,5.47"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M381.146,192.84
        c1.144-3.228,4.201-1.909,4.201-1.909"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M412.682,197.84
        c-11.062-6.625-20.572,6.647-20.572,6.647"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M413.181,194.2
        c-1.025,2.061-4.895,1.843-4.895,1.843"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M409.068,199.707
        c2.087-2.06-0.782-3.664-0.782-3.664"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M399.557,192.617
        c1.906,3.118-1.943,6.38-1.943,6.38"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M402.173,201.169
        c-0.018-3.449-4.68-2.072-4.68-2.072"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M405.591,191.882
        c0.523,2.733-2.829,4.482-2.829,4.482"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M405.854,199.891
        c0.355-3.276-3.093-3.526-3.093-3.526"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M231.513,523.988
        c29.845,19.337,56.442,47.635,58.734,99.163c4.693,105.477-9.364,185.942-16.915,194.651"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M127.705,546.719
        c33.775-38.952,103.808-22.73,103.808-22.73"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M127.705,546.719
        c33.775-38.952,97.808-26.73,97.808-26.73"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M114.998,477.969
        c35.589,13.372,76.807,22.172,110.516,42.02"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M34.588,501.906
        c12.661-29.1,78.201-24.14,80.41-23.938"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M34.588,501.906
        c13.101-30.111,75.244-25.929,75.244-25.929"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M33.588,376.262
        c1.321,58.836,34.278,83.107,76.244,99.716"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M33.588,376.262
        c3.719,55.256,36.621,80.033,77.376,96.094"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M132.136,404.326
        c-40.575,17.58-21.172,68.029-21.172,68.029"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M113.964,473.355
        c0,0-22.403-51.449,18.172-69.029"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M113.964,473.355
        c35.749,13.391,78.076,21.481,112.458,37.826"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M241.745,421.258
        c-40.603,30.727-15.322,89.924-15.322,89.924"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M232.17,514.032
        c0,0-31.028-62.048,9.575-92.774"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M232.17,514.032
        c27.456,14.224,49.611,34.812,59.34,69.676"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M251.25,327.668
        c26.104,17.521,44.938,43.572,44.469,91.236c-0.55,55.977-2.514,112.521-4.208,164.804"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M189.367,377.878
        c-4.74-37.02,61.882-50.293,61.882-50.293"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M189.367,377.878
        c-4.74-37.02,55.133-53.21,55.133-53.21V324.5"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M153.791,286
        c28.993,13,63.709,21.9,90.709,38.667"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M99.5,316.5v-0.223
        c9-39.512,54.291-30.216,54.291-30.216"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M99.5,316.379
        c9-39.512,46.582-34.001,46.582-34.001"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M91.739,196.656
        c0,47.179,23.524,70.138,54.238,85.722"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M91.739,196.656
        c3.242,45.755,27.094,68.045,57.083,82.65"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M167.447,221.36
        c-35.375,19.609-18.625,57.946-18.625,57.946"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M154.007,281.643
        c0,0-21.935-40.673,13.44-60.282"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M154.007,281.643
        c29.003,12.92,63.405,21.291,91.002,36.157"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M259.16,240.97
        c-33.732,15.97-14.15,76.83-14.15,76.83"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M250.015,319.8
        c0,0-24.587-62.86,9.145-78.83"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M250.015,319.8
        c14.12,10.097,32.268,19.535,44.418,50.817"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M223.472,116.385
        c-0.785,71.698,73.102,35.718,73.102,111.991c-0.532,46.818-1.171,87.375-2.141,142.241"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M223.472,116.385
        c2.487,66.113,57.903,38.056,73.364,88.24"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M299,58.5
        c0,0-1.248,59.913-2.164,146.125"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M395.957,180.76
        c-7.859,77.456-74.853,45.494-93.377,99.394"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M299,58.5
        c0,0,1.669,95.084,3.58,221.653"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M366.276,395.85
        c-26.851,13.34-49.701,32.807-60.31,69.484"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M395.957,180.76
        c-4.156,85.526-91.787,43.644-93.115,121.4c-0.894,52.314,1.85,107.637,3.125,163.174"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M355.334,311.304
        c40.262,17.118,10.918,84.496,10.918,84.496l0.024,0.05"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M370.252,393.8
        c0,0,25.344-65.378-14.918-82.496"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M448.312,363.8
        c-24.763,10.985-52.992,18.33-78.061,30"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M439.756,291.933
        c31.556,14.559,8.557,71.867,8.557,71.867"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M451.479,362.646
        c0,0,19.832-56.153-11.724-70.712"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M513.938,275.752
        l-0.022,2.043c-5.146,47.941-30.847,70.122-62.436,84.85"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M513.938,275.752
        c-1.312,50.74-27.477,73.126-60.836,88.717"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M505.875,421.441
        c7.726-36.513-52.773-56.973-52.773-56.973"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M449.206,366.245
        c0,0,64.395,18.683,56.669,55.196"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M370.096,398.879
        c25.135-13.485,53.922-21.412,79.11-32.634"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M423.514,456.616
        c8.088-36.435-53.418-57.736-53.418-57.736v-0.001"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M366.568,400.822
        c0,0,65.033,19.359,56.945,55.794"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M371.943,618.988
        c-25.156,13.011-47.002,32.33-58.341,62.781"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M366.568,400.822
        c-30.57,17.309-58.104,43.522-59.853,95.84c-2.44,73.053,4.084,129.171,6.887,185.107"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M356.713,529.258
        c40.602,30.727,15.23,89.73,15.23,89.73"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M378.146,616.358
        c0,0,19.169-56.374-21.433-87.101"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M488.265,579.846
        c-1.792,0.68-3.604,1.345-5.432,1.997c-33.196,11.852-72.041,19.577-104.688,34.516"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M480.312,499.702
        c26.45,19.461,7.953,80.144,7.953,80.144"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M492.399,578.267
        c0,0,14.362-59.104-12.088-78.564"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M560.412,484.389
        c0,54.223-29.556,78.278-68.013,93.878"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M560.412,484.389
        c0,52.406-28.238,78.461-64.762,95.957"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M565.42,608.906
        c-13.102-30.111-69.77-28.561-69.77-28.561"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M489.726,583.055
        c0,0,62.593-4.26,75.694,25.852"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M489.726,583.055
        c-34.372,15.172-75.415,24.426-109.034,41.983"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M439.344,693.109
        c-1.944-50.881-58.652-68.071-58.652-68.071"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M373.071,629.245
        c0,0,64.328,12.983,66.272,63.864"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M373.071,629.245
        c-32.826,19.173-56.939,47.995-57.602,101.267c-0.397,31.989,6.634,83.647,11.197,87.291"/>
        <g>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M355.16,310.969
        c0,0,1.396,1.367,1.515,2.145c0.145,1.005-1.884,3.597-1.884,3.597s-3.191-1.107-3.707-1.98c-0.391-0.649-0.04-3.072-0.04-3.072
        s-1.577,1.865-2.331,1.982c-1.006,0.159-3.736-1.637-3.736-1.637s0.909-1.892,1.913-3.583c0.38-0.641,2.966-0.025,2.966-0.025
        s-1.947-1.602-2.065-2.378c-0.151-1.005,1.629-3.721,1.629-3.721s2.857,1.455,3.384,2.327c0.394,0.643-0.175,3.438-0.175,3.438
        l-0.014-0.006c0,0,1.782-2.306,2.542-2.418c1.006-0.147,3.82,1.427,3.82,1.427s-0.493,3.195-1.365,3.723
        c-0.643,0.39-2.469,0.221-2.469,0.221L355.16,310.969z"/>

        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
        M351.731,308.86c0,0,0.572,0.53,0.856,0.509c0.277-0.02,0.95-0.627,0.95-0.627s-0.536,0.678-0.559,0.994
        c-0.018,0.319,0.455,0.925,0.455,0.925s-0.61-0.52-0.899-0.49c-0.26,0.03-0.857,0.61-0.857,0.61s0.459-0.688,0.472-0.988
        C352.161,309.48,351.731,308.86,351.731,308.86z"/>
        </g>
        <g>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M172.984,217.708
        c0,0,1.558-0.17,2.031,0.138c0.616,0.399,1.128,2.708,1.128,2.708s-2.085,1.188-2.804,1.051c-0.539-0.098-1.669-1.45-1.669-1.45
        s0.271,1.739-0.024,2.204c-0.395,0.624-2.666,1.246-2.666,1.246s-1.158-2.021-1.03-2.747c0.093-0.531,1.401-1.622,1.401-1.622
        s-1.797,0.294-2.275-0.014c-0.617-0.396-1.241-2.659-1.241-2.659s2.114-0.945,2.837-0.818c0.537,0.096,1.743,1.646,1.743,1.646
        l-0.01,0.004c0,0-0.361-1.978-0.06-2.442c0.399-0.616,2.614-1.35,2.614-1.35s1.362,1.877,1.234,2.601
        c-0.096,0.536-1.197,1.532-1.197,1.532L172.984,217.708z"/>

        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
        M170.669,218.718c0,0,0.513-0.23,0.581-0.425c0.063-0.19-0.148-0.811-0.148-0.811s0.299,0.549,0.501,0.654
        c0.207,0.102,0.743-0.039,0.743-0.039s-0.516,0.256-0.579,0.456c-0.054,0.183,0.161,0.745,0.161,0.745s-0.327-0.502-0.522-0.595
        C171.202,218.606,170.669,218.718,170.669,218.718z"/>
        </g>
        <g>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M265.782,237.351
        c0,0,2.179-0.238,2.844,0.192c0.863,0.56,1.58,3.79,1.58,3.79s-2.919,1.663-3.927,1.472c-0.755-0.137-2.336-2.03-2.336-2.03
        s0.379,2.435-0.034,3.086c-0.552,0.872-3.732,1.744-3.732,1.744s-0.828-1.954-1.443-3.845c-0.233-0.718,1.962-2.272,1.962-2.272
        s-2.516,0.412-3.185-0.018c-0.865-0.554-1.739-3.722-1.739-3.722s2.96-1.325,3.973-1.145c0.752,0.133,2.441,2.305,2.441,2.305
        l-0.014,0.006c0,0-0.507-2.77-0.086-3.42c0.56-0.863,3.661-1.889,3.661-1.889s1.908,2.628,1.727,3.643
        c-0.134,0.75-1.675,2.145-1.675,2.145L265.782,237.351z"/>

        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
        M262.302,238.371c0,0,0.787-0.083,0.958-0.312c0.17-0.225,0.157-1.141,0.157-1.141s0.159,0.86,0.384,1.087
        c0.231,0.226,1.006,0.273,1.006,0.273s-0.802,0.116-0.972,0.355c-0.15,0.218-0.109,1.06-0.109,1.06s-0.215-0.809-0.436-1.019
        C263.062,238.457,262.302,238.371,262.302,238.371z"/>
        </g>
        <g>

        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
        M224.585,111.887c0,0,1.246-0.136,1.625,0.11c0.493,0.319,0.902,2.167,0.902,2.167s-1.668,0.95-2.243,0.84
        c-0.432-0.078-1.335-1.16-1.335-1.16s0.217,1.391-0.02,1.763c-0.316,0.499-2.133,0.997-2.133,0.997s-0.926-1.617-0.824-2.197
        c0.074-0.425,1.121-1.297,1.121-1.297s-1.438,0.235-1.82-0.011c-0.493-0.316-0.992-2.127-0.992-2.127s1.691-0.756,2.27-0.654
        c0.43,0.077,1.395,1.317,1.395,1.317l-0.008,0.003c0,0-0.289-1.582-0.048-1.953c0.319-0.493,2.091-1.08,2.091-1.08
        s1.09,1.502,0.987,2.081c-0.077,0.429-0.958,1.226-0.958,1.226L224.585,111.887z"/>

        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
        M222.733,112.695c0,0,0.41-0.184,0.465-0.34c0.051-0.152-0.119-0.648-0.119-0.648s0.24,0.439,0.401,0.523
        c0.166,0.082,0.595-0.031,0.595-0.031s-0.412,0.205-0.463,0.364c-0.043,0.146,0.129,0.597,0.129,0.597s-0.262-0.402-0.418-0.477
        C223.159,112.605,222.733,112.695,222.733,112.695z"/>
        </g>
        <g>

        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
        M396.588,176.889c0,0,1.242-0.138,1.625,0.109c0.492,0.319,0.899,2.163,0.899,2.163s-1.665,0.952-2.243,0.842
        c-0.43-0.078-1.336-1.161-1.336-1.161s0.219,1.391-0.017,1.765c-0.317,0.498-2.132,0.996-2.132,0.996s-0.93-1.617-0.828-2.197
        c0.078-0.423,1.125-1.298,1.125-1.298s-1.438,0.234-1.82-0.01c-0.496-0.317-0.994-2.127-0.994-2.127s1.689-0.756,2.268-0.653
        c0.43,0.075,1.398,1.315,1.398,1.315l-0.008,0.005c0,0-0.291-1.583-0.052-1.955c0.319-0.493,2.091-1.08,2.091-1.08
        s1.094,1.502,0.988,2.083c-0.074,0.427-0.957,1.226-0.957,1.226L396.588,176.889z"/>

        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
        M394.596,177.471c0,0,0.453-0.049,0.548-0.178c0.101-0.129,0.093-0.652,0.093-0.652s0.089,0.491,0.219,0.621
        c0.132,0.129,0.572,0.156,0.572,0.156s-0.455,0.066-0.556,0.203c-0.086,0.125-0.062,0.605-0.062,0.605s-0.121-0.462-0.247-0.582
        C395.033,177.52,394.596,177.471,394.596,177.471z"/>
        </g>
        <g>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M439.407,291.623
        c0,0,1.066,1.043,1.154,1.636c0.111,0.767-1.438,2.746-1.438,2.746s-2.435-0.845-2.829-1.512c-0.298-0.495-0.031-2.344-0.031-2.344
        s-1.203,1.424-1.777,1.512c-0.77,0.123-2.853-1.249-2.853-1.249s0.695-1.443,1.46-2.734c0.29-0.49,2.265-0.02,2.265-0.02
        s-1.487-1.222-1.577-1.814c-0.116-0.767,1.244-2.839,1.244-2.839s2.181,1.11,2.581,1.775c0.3,0.492-0.132,2.625-0.132,2.625
        l-0.011-0.005c0,0,1.359-1.761,1.939-1.847c0.769-0.112,2.917,1.09,2.917,1.09s-0.377,2.438-1.042,2.841
        c-0.493,0.297-1.886,0.168-1.886,0.168L439.407,291.623z"/>

        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
        M436.789,290.013c0,0,0.438,0.404,0.655,0.388c0.211-0.015,0.724-0.479,0.724-0.479s-0.409,0.518-0.424,0.758
        c-0.016,0.244,0.345,0.707,0.345,0.707s-0.465-0.397-0.687-0.375c-0.197,0.023-0.653,0.466-0.653,0.466s0.351-0.525,0.36-0.754
        C437.118,290.485,436.789,290.013,436.789,290.013z"/>
        </g>
        <g>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M248.432,416.758
        c0,0,2.07-0.718,2.816-0.448c0.966,0.354,2.386,3.341,2.386,3.341s-2.473,2.273-3.498,2.312c-0.767,0.036-2.731-1.457-2.731-1.457
        s0.914,2.289,0.656,3.015c-0.343,0.975-3.248,2.534-3.248,2.534s-1.243-1.719-2.266-3.426c-0.389-0.646,1.405-2.652,1.405-2.652
        s-2.36,0.964-3.108,0.694c-0.967-0.347-2.526-3.239-2.526-3.239s2.589-1.953,3.616-2.004c0.763-0.039,2.894,1.701,2.894,1.701
        l-0.012,0.009c0,0-1.113-2.587-0.848-3.314c0.353-0.966,3.146-2.659,3.146-2.659s2.447,2.136,2.497,3.165
        c0.037,0.761-1.154,2.465-1.154,2.465L248.432,416.758z"/>

        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
        M245.268,418.53c0,0,0.748-0.257,0.864-0.519c0.115-0.257-0.102-1.146-0.102-1.146s0.347,0.804,0.616,0.975
        c0.276,0.167,1.042,0.042,1.042,0.042s-0.756,0.291-0.867,0.563c-0.098,0.244,0.13,1.056,0.13,1.056s-0.39-0.74-0.652-0.895
        C246.027,418.444,245.268,418.53,245.268,418.53z"/>
        </g>
        <g>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M137.984,401.708
        c0,0,1.557-0.17,2.031,0.138c0.615,0.399,1.127,2.708,1.127,2.708s-2.084,1.188-2.803,1.051c-0.539-0.098-1.67-1.45-1.67-1.45
        s0.271,1.739-0.023,2.204c-0.396,0.624-2.666,1.246-2.666,1.246s-1.158-2.021-1.031-2.747c0.094-0.531,1.402-1.622,1.402-1.622
        s-1.797,0.294-2.275-0.014c-0.617-0.396-1.24-2.659-1.24-2.659s2.113-0.945,2.836-0.818c0.537,0.096,1.744,1.646,1.744,1.646
        l-0.01,0.004c0,0-0.361-1.978-0.061-2.442c0.399-0.616,2.613-1.35,2.613-1.35s1.363,1.877,1.234,2.601
        c-0.096,0.536-1.197,1.532-1.197,1.532L137.984,401.708z"/>

        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
        M135.67,402.718c0,0,0.512-0.23,0.58-0.425c0.064-0.19-0.148-0.811-0.148-0.811s0.3,0.549,0.502,0.654
        c0.207,0.102,0.743-0.039,0.743-0.039s-0.516,0.256-0.579,0.456c-0.053,0.183,0.162,0.745,0.162,0.745s-0.328-0.502-0.523-0.595
        C136.201,402.606,135.67,402.718,135.67,402.718z"/>
        </g>
        <g>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M356.16,528.969
        c0,0,1.396,1.367,1.515,2.145c0.145,1.006-1.884,3.598-1.884,3.598s-3.191-1.107-3.707-1.98c-0.391-0.648-0.04-3.071-0.04-3.071
        s-1.577,1.865-2.331,1.981c-1.006,0.16-3.736-1.637-3.736-1.637s0.909-1.892,1.913-3.582c0.38-0.642,2.966-0.025,2.966-0.025
        s-1.947-1.602-2.065-2.378c-0.151-1.005,1.629-3.721,1.629-3.721s2.857,1.454,3.384,2.327c0.394,0.643-0.175,3.438-0.175,3.438
        l-0.014-0.006c0,0,1.782-2.307,2.542-2.418c1.006-0.147,3.82,1.426,3.82,1.426s-0.493,3.195-1.365,3.724
        c-0.643,0.39-2.469,0.222-2.469,0.222L356.16,528.969z"/>

        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
        M352.731,526.859c0,0,0.572,0.53,0.856,0.51c0.277-0.021,0.95-0.627,0.95-0.627s-0.536,0.678-0.559,0.993
        c-0.018,0.319,0.455,0.925,0.455,0.925s-0.61-0.52-0.899-0.489c-0.26,0.03-0.857,0.61-0.857,0.61s0.459-0.688,0.472-0.988
        C353.161,527.48,352.731,526.859,352.731,526.859z"/>
        </g>
        <g>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M479.407,499.623
        c0,0,1.066,1.043,1.154,1.636c0.111,0.767-1.438,2.745-1.438,2.745s-2.435-0.845-2.829-1.512c-0.298-0.494-0.031-2.344-0.031-2.344
        s-1.203,1.424-1.777,1.512c-0.77,0.123-2.853-1.248-2.853-1.248s0.695-1.443,1.46-2.734c0.29-0.489,2.265-0.02,2.265-0.02
        s-1.487-1.222-1.577-1.814c-0.116-0.768,1.244-2.84,1.244-2.84s2.181,1.11,2.581,1.775c0.3,0.492-0.132,2.625-0.132,2.625
        l-0.011-0.004c0,0,1.359-1.762,1.939-1.848c0.769-0.111,2.917,1.09,2.917,1.09s-0.377,2.439-1.042,2.842
        c-0.493,0.297-1.886,0.168-1.886,0.168L479.407,499.623z"/>

        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
        M476.789,498.013c0,0,0.438,0.403,0.655,0.388c0.211-0.016,0.724-0.479,0.724-0.479s-0.409,0.518-0.424,0.758
        c-0.016,0.244,0.345,0.707,0.345,0.707s-0.465-0.396-0.687-0.374c-0.197,0.023-0.653,0.466-0.653,0.466s0.351-0.525,0.36-0.754
        C477.118,498.485,476.789,498.013,476.789,498.013z"/>
        </g>
        </svg>



    )
}

export default HomeAnimation;