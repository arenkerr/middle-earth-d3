import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/animation.scss';

const HomeAnimation = () => {
    return ( 
        <svg id="home" version="1.1" x="0px" y="0px" width="1000px"
        height="1200px" viewBox="0 0 600 800" enable-background="new 0 0 600 800">
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M373.071,591.745
        c-32.826,19.173-56.915,47.995-57.602,101.267"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M489.726,545.555
        c-34.372,15.172-75.415,24.426-109.034,41.983"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M560.412,446.889
        c0,52.406-28.238,78.461-64.762,95.957"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M231.513,486.488
        c29.845,19.337,52.251,47.993,58.734,99.163"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M114.998,440.469
        c35.589,13.372,76.807,22.172,110.516,42.02"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M33.588,338.762
        c1.321,58.836,34.278,83.107,76.244,99.716"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M132.136,366.826
        c-40.575,17.58-21.172,68.029-21.172,68.029"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M34.588,464.406
        c13.101-30.111,75.244-25.929,75.244-25.929"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M241.745,383.758
        c-40.603,30.727-15.322,89.924-15.322,89.924"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M127.705,509.219
        c33.775-38.952,97.808-26.73,97.808-26.73"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M366.568,363.322
        c-30.57,17.309-55.061,43.713-59.853,95.84"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M449.206,328.745
        c-25.188,11.222-53.976,19.149-79.11,32.634"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M513.938,238.252
        c-1.312,50.74-27.477,73.126-60.836,88.717"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M251.25,290.168
        c26.104,17.521,44.47,43.57,44.469,91.236"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M155.874,248.705
        c28.993,13.054,63.648,21.695,90.737,38.461"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M93.859,159.156
        c0,47.179,23.645,70.138,54.358,85.722"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M169.478,183.86
        c-35.375,19.609-13.455,60.282-13.455,60.282"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M261.164,203.47
        c-33.732,15.97-9.147,78.83-9.147,78.83"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M395.957,143.26
        c-4.156,85.526-89.241,43.729-93.115,121.4"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M334.567,48.278
        c0,50.537-33.896,20.225-33.896,77.058"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M326.677,165.063
        c24.78,14.278,9.428,43.852,9.428,43.852"/>
        <Link to="/elves">
            <text x="538" y="428">Elves</text>
            <path id="elves" fill="#912400" d="M564,443.301c0,1.991-1.597,3.588-3.588,3.588s-3.588-1.597-3.588-3.588
            s1.597-3.588,3.588-3.588S564,441.31,564,443.301z"/>
        </Link>
        <Link to="/men/atani">
            <text x="-14" y="320">Men: Atani</text>
            <path id="men2" fill="#912400" d="M37.134,334.874c0,1.949-1.597,3.546-3.546,3.546c-1.991,0-3.588-1.597-3.588-3.546
            c0-1.991,1.597-3.588,3.588-3.588C35.537,331.286,37.134,332.883,37.134,334.874z"/>
        </Link>
        <Link to="/dwarves">
            <text x="54" y="143">Dwarves</text>
            <path id="dwarves" fill="#912400" d="M98.128,156.109c0,1.991-1.639,3.588-3.588,3.588c-1.991,0-3.588-1.597-3.588-3.588
            c0-1.949,1.597-3.546,3.588-3.546C96.489,152.563,98.128,154.16,98.128,156.109z"/>
        </Link>
        <Link to="/Hobbits">
            <text x="486" y="220">Hobbits</text>
            <path id="hobbits" fill="#912400" d="M517.525,234.791c0,1.949-1.597,3.546-3.588,3.546s-3.588-1.597-3.588-3.546
            c0-1.991,1.597-3.588,3.588-3.588S517.525,232.8,517.525,234.791z"/>
        </Link>
        <Link to="/men/atanatari">
            <text x="50" y="540">Men: Atanatari</text>
            <path id="men1" fill="#912400" d="M128.293,512.219c0,1.991-1.597,3.588-3.588,3.588s-3.588-1.597-3.588-3.588
            s1.597-3.588,3.588-3.588S128.293,510.228,128.293,512.219z"/>
        </Link>
        <Link to="/all">
            <text x="282" y="10">All</text>
            <path id="all" fill="#912400" d="M303.004,17.715c0,1.942-1.621,3.5-3.541,3.5c-1.901,0-3.459-1.558-3.459-3.5s1.558-3.5,3.459-3.5
            C301.383,14.215,303.004,15.772,303.004,17.715z"/>
        </Link>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M309.677,63.666
        c9.44,7.577,3.591,23.271,3.591,23.271"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M329.912,95.973
        c-2.727-10.416-16.783-8.732-16.783-8.732"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M328.345,50.477
        c4.011-0.828,5.665,6.644,5.665,6.644"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M340.203,54.186
        c-2.828-2.569-6.168,3.089-6.168,3.089"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M324.498,60.461
        c6.054,3.733,4.095,14.468,4.095,14.468"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M338.887,78.744
        c-2.473-6.344-10.347-3.604-10.347-3.604"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M135.068,377.404
        c-6.218-7.126-15.991-1.692-15.991-1.692"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M113.711,359.704
        c12.147,5.847,5.701,15.667,5.701,15.667"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M131.521,402.515
        c-19.519-0.676-22.204,17.716-22.204,17.716"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M85.088,409.202
        c15.907-6.087,22.25,11.599,22.25,11.599"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M25.043,446.375
        c6.083,9.936,19.538,5.953,19.538,5.953"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M46.163,471.915
        c-9.841-9.146-1.582-19.587-1.582-19.587"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M57.829,419.77
        c3.52,19.21,20.434,20.206,20.434,20.206"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M74.304,463.693
        c-9.352-14.234,5.979-22.312,5.979-22.312"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M125.101,490.116
        c4.905,9.203,16.634,6.08,16.634,6.08"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M142.434,513.968
        c-8.17-8.623-0.698-17.771-0.698-17.771"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M145.824,473.236
        c5.421,14.409,16.191,12.427,16.191,12.427"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M162.974,505.133
        c-7.822-9.837-1.056-17.117-1.056-17.117"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M251.379,391.162
        c-9.792-6.311-20.186,3.116-20.186,3.116"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M221.268,377.319
        c12.835,3.969,9.926,16.959,9.926,16.959"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M243.452,427.252
        c-20.034-0.521-21.166,19.623-21.074,18.494"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M197.078,434.338
        c15.854-6.223,22.326,11.625,22.326,11.625"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M264.375,214.972
        c-5.304-7.271-14.236-2.364-14.236-2.364"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M246.925,196.968
        c7.833,6.162,3.213,15.639,3.213,15.639"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M261.164,240.143
        c-14.498,2.118-16.244,15.705-16.244,15.705"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M221.752,250.013
        c14.611-8.751,20.503,6.982,20.503,6.982"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M174.397,193.044
        c-5.146-6.147-14.943-1.769-14.943-1.769"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M157.078,177.901
        c7.902,5.149,2.376,13.374,2.376,13.374"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M165.833,213.375
        c-13.358-0.833-15.778,12.498-15.778,12.498"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M135.186,216.536
        c9.814-1.786,11.891,8.541,11.891,8.541"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M333.171,160.827
        c-2.87,3.763,1.738,10.671,1.738,10.671"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M326.982,173.402
        c1.722-5.71,7.927-1.903,7.927-1.903"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M350.981,184.41
        c-8.09-0.659-10.227,9.388-10.227,9.388"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M331.62,187.403
        c6.686-3.112,9.071,6.707,9.071,6.707"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M165.467,465.099
        c3.832,15.559,16.879,15.807,16.879,15.807"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M179.759,500.448
        c-7.265-11.349,2.002-16.421,2.002-16.421"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M247.904,404.503
        c-18.948-4.731-26.058,12.841-26.058,12.841"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M201.098,401.358
        c16.827-2.635,19.408,15.479,19.408,15.479"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M127.402,388.538
        c-12.354-4.839-18.568,6.384-18.568,6.384"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M96.162,382.395
        c11.549-0.353,11.666,12.527,11.666,12.527"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M59.999,465.204c0,0-8.943-9.358-1.348-20.237
        "/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M44.472,434.428
        c0,0,2.119,12.705,13.473,10.56"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M258.361,226.318
        c-10.527-3.112-14.484,8.626-14.484,8.626"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M228.373,222.965
        c10.487-2.723,12.989,11.979,12.989,11.979"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M167.083,201.965
        c-8.571-7.112-16.193,3.835-16.193,3.835"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M139.195,196.783
        c9.43-1.721,10.524,8.757,10.524,8.757"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M101.98,278.879
        c8.643-39.512,53.893-30.174,53.893-30.174"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M112.189,280.959
        c-7.365-3.167-5.979-13.809-5.979-13.809"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M92.716,268.709
        c7.199,6.094,13.494-1.559,13.494-1.559"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M131.5,264.875
        c-7-11.562-0.604-15.615-0.604-15.615"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M122.452,236.658
        c-1.064,11.782,7.68,9.838,7.68,9.838"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M119.312,270.25
        c-9.271-6.172-2.667-14.774-2.667-14.774"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M105.678,246.164
        c-1.767,9.024,9.869,8.147,9.869,8.147"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M189.367,340.378
        c-4.74-37.02,61.882-50.21,61.882-50.21"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M200.785,336.88
        c-8.983-0.546-9.667-10.714-9.667-10.714"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M176.214,331.893
        c9.414,3.274,14.903-5.727,14.903-5.727"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M220.252,320.603
        c-6.035-13.352,1.33-20.661,1.33-20.661"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M207.312,282.09
        c0.509,17.024,13.063,15.498,13.063,15.498"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M210.033,330.513
        c-11.108-9.555-4.6-21.252-4.6-21.252"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M187.262,302.79
        c3.362,10.3,17.564,4.952,17.564,4.952"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M355.334,273.804
        c40.262,17.118,10.918,84.496,10.918,84.496"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M351.502,286.133
        c6.331-7.794,16.992-2.535,16.992-2.535"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M372.328,266.835
        c-9.349,6.605-3.834,16.763-3.834,16.763"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M355.334,313.113
        c17.305,2.27,19.152,18.063,19.152,18.063"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M402.375,323.692
        c-17.439-9.38-25.613,7.484-25.613,7.484"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M351.951,298.161
        c16.752-4.504,24.429,8.308,24.429,8.308"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M394.473,293.628
        c-12.518-2.919-16.958,11.841-16.958,11.841"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M423.514,419.116
        c8.088-36.435-56.634-55.591-56.634-55.591"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M412.462,414.595
        c8.996,0.272,10.602-9.791,10.602-9.791"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M437.384,411.862
        c-9.672,2.404-14.32-7.059-14.32-7.059"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M394.556,396.615
        c7.224-12.748-2.576-22.542-2.576-22.542"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M410.944,359.438
        c-2.055,16.907-16.676,13.557-16.676,13.557"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M403.831,407.412
        c11.931-8.505,5.456-21.776,5.456-21.776"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M429.029,381.875
        c-4.284,9.952-18.358,3.444-18.358,3.444"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M439.756,254.433
        c31.556,14.559,8.557,71.867,8.557,71.867"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M436.752,264.919
        c4.963-6.628,13.317-2.155,13.317-2.155"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M453.075,248.506
        c-7.327,5.618-3.006,14.257-3.006,14.257"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M439.756,287.867
        c13.562,1.931,15.121,14.752,15.121,14.752"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M476.625,296.865
        c-13.669-7.978-20.006,6.366-20.006,6.366"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M437.104,275.149
        c13.131-3.831,19.76,7.978,19.76,7.978"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M470.431,271.294
        c-9.811-2.482-13.567,10.921-13.567,10.921"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M505.875,383.942
        c7.726-36.514-56.669-55.197-56.669-55.197"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M494.778,379.53
        c8.998,0.183,10.504-9.896,10.504-9.896"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M519.672,376.551
        c-9.647,2.5-14.39-6.917-14.39-6.917"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M476.695,361.729
        c7.097-12.819-3.862-23.333-3.862-23.333"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M492.714,324.39
        c-1.887,16.927-18.498,12.294-18.498,12.294"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M486.077,372.433
        c11.846-8.623,5.429-21.752,5.429-21.752"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M511.021,346.647
        c-4.186,9.994-18.307,3.355-18.307,3.355"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M439.344,655.609
        c-1.944-50.881-66.272-63.864-66.272-63.864"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M427.756,659.27
        c10.78-4.415,9.003-18.334,9.003-18.334"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M456.346,642.508
        c-10.603,8.252-19.587-1.572-19.587-1.572"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M402.707,632.105
        c11.595-15.716-0.684-29.452-0.684-29.452"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M428.449,588.029
        c-3.966,16.807-22.754,11.931-22.754,11.931"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M418.809,648.781
        c14.728-12.825,5.855-28.623,5.855-28.623"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M448.187,612.207
        c-7.475,15.305-21.646,7.216-21.646,7.216"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M356.713,491.758
        c40.602,30.727,15.23,89.73,15.23,89.73"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M347.078,499.162
        c9.792-6.311,20.186,3.116,20.186,3.116"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M377.189,485.319
        c-12.836,3.969-9.926,16.959-9.926,16.959"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M355.006,535.252
        c19.523-0.508,23.893,17.922,23.893,17.922"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M405.379,541.417
        c-16.186-6.592-22.817,12.084-22.817,12.084"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M350.553,512.503
        c18.948-4.731,27.212,12.312,27.212,12.312"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M399.359,509.358
        c-17.259-2.635-20.165,14.594-20.165,14.594"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M480.312,462.202
        c26.45,19.461,7.953,80.144,7.953,80.144"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M500.012,456.899
        c-11.038,3.726-10.144,17.729-10.144,17.729"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M470.42,471.82
        c11.103-7.563,19.448,2.808,19.448,2.808"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M518.673,494.774
        c-19.513-0.835-22.483,17.062-22.483,17.062"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M472.188,501.085
        c15.955-5.957,21.814,10.929,21.814,10.929"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M473.891,486.801
        c0,0,11.111-6.642,20.031,3.181"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M507.348,478.495
        c0,0-12.041-0.755-12.47,10.791"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M565.42,571.406
        c-13.102-30.111-75.694-25.852-75.694-25.852"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M574.965,553.375
        c-6.084,9.936-19.539,5.953-19.539,5.953"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M553.845,578.915
        c9.841-9.146,1.581-19.587,1.581-19.587"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M542.179,526.77
        c-3.52,19.21-19.615,18.521-19.615,18.521"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M525.703,570.693
        c9.352-14.234-4.779-23.556-4.779-23.556"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M540.009,572.204
        c0,0,8.943-9.358,1.348-20.237"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M555.536,541.428
        c0,0-0.206,12.466-11.561,10.32"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M345.868,172.656
        c-5.851,1.531-5.6,9.284-5.6,9.284"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M330.105,179.474
        c5.948-3.641,10.163,2.466,10.163,2.466"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M371.34,241.455
        c-2.021-28.528-35.33-27.634-35.33-27.634"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M377.987,237.463
        c-4.639,0.938-8.841-6.225-8.841-6.225"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M363.972,237.538
        c5.889,0.945,5.175-6.299,5.175-6.299"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M364.552,211.141
        c-2.94,7.565-12.912,5.099-12.912,5.099"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M353.403,227.25
        c5.72-4.654-2.071-11.089-2.071-11.089"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M372.893,220.875
        c-3.933,4.594-10.798,0.982-10.798,0.982"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M359.874,232.076
        c5.873-3.76,2.221-10.219,2.221-10.219"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M362.677,156.13
        c19.421,11.977,7.389,36.785,7.389,36.785"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M367.767,152.577
        c-2.25,3.156,1.362,8.952,1.362,8.952"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M362.916,163.125
        c1.35-4.79,6.213-1.597,6.213-1.597"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M381.725,172.359
        c-6.34-0.553-8.015,7.875-8.015,7.875"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M366.551,174.87
        c5.239-2.61,7.109,5.626,7.109,5.626"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M377.717,162.5
        c-4.585,1.284-4.388,7.788-4.388,7.788"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M365.364,168.219
        c4.661-3.054,7.965,2.068,7.965,2.068"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M405.535,207.827
        c-9.47-20.76-35.581-11.906-35.581-11.906"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M409.693,203.219
        c-3.412,1.84-8.713-2.465-8.713-2.465"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M398.623,206.719
        c4.921-0.743,2.357-5.966,2.357-5.966"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M391.801,186.909
        c-0.24,6.359-8.811,6.973-8.811,6.973"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M387.423,201.652
        c3.241-4.875-4.699-7.754-4.699-7.754"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M401.086,192.111
        c-1.845,4.39-8.273,3.385-8.273,3.385"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M393.874,203.657
        c3.61-4.245-1.062-8.16-1.062-8.16"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M225.472,80.885
        c0,69.409,73.124,33.237,73.124,109.51"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M282.283,101.2
        c-19.605,11.794-7.458,36.224-7.458,36.224"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M235.418,81.497
        c-6.391-1.288-9.026,10.342-9.026,10.342"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M216.522,87.27
        c4.508-3.999,9.83,4.809,9.83,4.809"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M277.145,97.701
        c2.271,3.108-1.375,8.815-1.375,8.815"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M282.041,108.088
        c-1.362-4.716-6.271-1.572-6.271-1.572"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M263.054,117.181
        c6.4-0.544,8.091,7.755,8.091,7.755"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M278.372,119.653
        c-5.29-2.571-7.177,5.541-7.177,5.541"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M267.1,107.472
        c4.628,1.265,4.43,7.669,4.43,7.669"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M279.57,113.104
        c-4.706-3.007-8.041,2.037-8.041,2.037"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M244.948,161.999
        c1.598-23.565,27.951-22.827,27.951-22.827"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M239.688,158.701
        c3.67,0.775,6.994-5.142,6.994-5.142"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M250.777,158.763
        c-4.659,0.781-4.094-5.203-4.094-5.203"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M250.318,136.958
        c2.326,6.249,10.215,4.212,10.215,4.212"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M259.138,150.265
        c-4.525-3.845,1.639-9.16,1.639-9.16"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M243.719,144.999
        c3.111,3.795,8.542,0.811,8.542,0.811"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M254.019,154.251
        c-4.646-3.106-1.757-8.441-1.757-8.441"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M252.592,92.995
        c-15.365,9.894-5.845,30.386-5.845,30.386"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M248.565,90.06
        c1.78,2.607-1.078,7.395-1.078,7.395"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M252.403,98.773
        c-1.068-3.957-4.916-1.319-4.916-1.319"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M237.523,106.4
        c5.016-0.457,6.341,6.506,6.341,6.506"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M249.527,108.475
        c-4.145-2.156-5.625,4.647-5.625,4.647"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M240.693,98.256
        c3.627,1.061,3.472,6.433,3.472,6.433"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M250.466,102.98
        c-3.688-2.522-6.301,1.708-6.301,1.708"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M217.894,134.22
        c7.492-17.148,28.15-9.835,28.15-9.835"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M214.604,130.414
        c2.7,1.52,6.893-2.037,6.893-2.037"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M223.362,133.306
        c-3.893-0.614-1.865-4.928-1.865-4.928"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M228.76,116.941
        c0.19,5.253,6.971,5.76,6.971,5.76"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M232.224,129.12
        c-2.564-4.027,3.718-6.406,3.718-6.406"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M221.414,121.239
        c1.459,3.626,6.545,2.796,6.545,2.796"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M227.12,130.776
        c-2.856-3.507,0.84-6.741,0.84-6.741"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M274.958,28.998
        c0,38.26,25.778,15.312,25.777,58.338"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M293.887,40.647
        c-7.179,5.736-2.731,17.618-2.731,17.618"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M278.498,65.106
        c2.073-7.886,12.764-6.61,12.764-6.61"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M279.69,30.662
        c-3.05-0.626-4.308,5.03-4.308,5.03"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M270.672,33.47
        c2.151-1.945,4.69,2.339,4.69,2.339"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M282.615,38.221
        c-4.604,2.826-3.114,10.953-3.114,10.953"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M271.673,52.062
        c1.88-4.802,7.869-2.728,7.869-2.728"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M300,21c0,0-0.248,59.913-1.164,146.125"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M298.606,187.999
        c-0.532,46.818-1.252,100.013-2.222,154.878"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M295.668,381.402
        c-1.099,55.969-2.464,112.523-4.157,164.806"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M290.248,585.651
        c-3.916,105.508-9.364,185.942-16.915,194.651"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M300,21c0,0,0.669,95.084,2.58,221.653"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M302.842,264.66
        c0.82,52.315,1.85,107.637,3.125,163.174"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M305.967,427.834"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M306.716,459.162"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M306.716,459.162
        c1.818,73.071,4.084,129.171,6.887,185.107"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M313.603,644.27"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M315.47,693.012
        c-0.383,31.989,6.634,83.647,11.197,87.291"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M315.087,686.644"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M371.943,581.488
        c-25.156,13.011-47.135,32.33-58.474,62.781"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M488.265,542.346
        c-1.792,0.68-3.604,1.345-5.432,1.997c-33.196,11.852-72.041,19.577-104.688,34.516"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M560.412,446.889
        c0,54.223-29.556,78.278-68.013,93.878"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M366.276,358.35
        c-26.851,13.339-49.701,32.807-60.31,69.484"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M448.312,326.3
        c-24.763,10.985-52.992,18.33-78.061,30"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M513.915,240.295
        c-5.146,47.941-30.847,70.122-62.436,84.85"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M232.17,476.532
        c27.456,14.224,49.611,34.812,59.34,69.676"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M113.964,435.855
        c35.749,13.391,78.076,21.481,112.458,37.826"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M33.588,338.762
        c3.719,55.256,36.621,80.033,77.376,96.094"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M252.017,282.3
        c20.899,12.576,37.761,30.847,44.368,60.577"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M156.022,244.143
        c29.003,12.92,63.397,20.291,90.994,35.157"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M93.859,159.156
        c3.242,45.755,27.034,68.045,57.023,82.65"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M395.957,143.26
        c-7.859,77.456-74.437,45.829-92.961,99.728"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M225.472,78.885
        c2.488,66.113,57.903,38.056,73.364,88.24"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M531.832,462.047
        c22.051,5.864,17.688,33.089,17.688,33.089"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M535.68,457.177
        c-1.243,3.671,3.887,8.178,3.887,8.178"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M534.079,468.675
        c-0.09-4.975,5.487-3.32,5.487-3.32"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M554.753,472.09
        c-6.229,1.3-5.401,9.853-5.401,9.853"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M540.948,478.871
        c4.263-4.01,8.431,3.337,8.431,3.337"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M548.07,463.807
        c-4.02,2.551-1.955,8.722-1.955,8.722"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M537.893,472.846
        c3.582-4.269,8.223-0.317,8.223-0.317"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M586.028,486.499
        c-19.382-12.04-36.219,9.793-36.219,9.793"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M586.939,480.36
        c-1.822,3.421-8.619,2.772-8.619,2.772"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M579.66,489.405
        c3.687-3.343-1.34-6.272-1.34-6.272"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M563.009,476.688
        c3.321,5.428-3.475,10.686-3.475,10.686"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M567.528,491.39
        c-0.001-5.854-8.207-3.854-8.207-3.854"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M573.621,475.879
        c0.895,4.676-5.015,7.399-5.015,7.399"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M574.01,489.485
        c0.655-5.533-5.403-6.207-5.403-6.207"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M482.221,247.622
        c22.528,3.619,20.924,31.144,20.924,31.144"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M485.561,242.389
        c-0.868,3.777,4.689,7.746,4.689,7.746"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M485.123,253.991
        c-0.589-4.942,5.127-3.856,5.127-3.856"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M506.034,255.311
        c-6.067,1.919-4.384,10.345-4.384,10.345"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M492.981,263.445
        c3.839-4.419,8.723,2.472,8.723,2.472"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M498.554,247.74
        c-3.743,2.943-1.068,8.875-1.068,8.875"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M489.337,257.757
        c3.134-4.606,8.148-1.142,8.148-1.142"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M539.24,261.236
        c-21.551-7.498-33.191,17.495-33.191,17.495"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M538.782,255.046
        c-1.027,3.738-7.802,4.595-7.802,4.595"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M533.664,265.468
        c2.862-4.071-2.684-5.826-2.684-5.826"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M514.629,256.712
        c4.431,4.567-1.047,11.187-1.047,11.187"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M522.263,270.064
        c-1.285-5.711-8.853-1.961-8.853-1.961"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M524.806,253.594
        c1.898,4.367-3.27,8.32-3.27,8.32"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M528.169,266.785
        c-0.574-5.543-6.633-4.871-6.633-4.871"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M61.201,342.844
        c-20.726,2.455-21.011,28.146-21.011,28.146"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M61.124,348.639
        c-0.778-4.279-6.256-4.142-6.256-4.142"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M57.126,337.094
        c2.262,4.36-2.259,7.403-2.259,7.403"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M53.092,356.913
        c-5.779-3.317-10.767,3.165-10.767,3.165"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M37.714,352.265
        c6.015,0.109,4.458,8.015,4.458,8.015"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M55.629,351.654
        c-2.074-5.517-7.997-1.587-7.997-1.587"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M44.419,342.956
        c4.711-0.445,2.771,7.044,2.771,7.044"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M8.793,360.805
        c18.457-9.449,29.733,11.687,29.733,11.687"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M11.348,365.565
        c-1.185-3.978,3.475-6.9,3.475-6.9"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M9.745,353.782
        c-0.026,4.868,5.078,4.884,5.078,4.884"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M21.646,367.973
        c3.427-5.952,10.399-3.343,10.399-3.343"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M32.231,355.199
        c-5.003,3.423-0.3,9.113-0.3,9.113"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M17.257,365.02
        c-0.629-5.721,6.032-5.746,6.032-5.746"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M22.932,351.599
        c-4.147,2.241,0.698,7.374,0.698,7.374"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M122.243,164.887
        c-20.735,2.376-21.118,28.066-21.118,28.066"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M122.143,170.681
        c-0.762-4.282-6.241-4.165-6.241-4.165"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M118.189,159.122
        c2.245,4.369-2.287,7.395-2.287,7.395"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M114.08,178.925
        c-5.767-3.339-10.778,3.124-10.778,3.124"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M98.72,174.218
        c6.014,0.132,4.428,8.031,4.428,8.031"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M116.637,173.675
        c-2.053-5.525-7.99-1.618-7.99-1.618"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M105.46,164.935
        c4.713-0.427,2.745,7.054,2.745,7.054"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M68.324,184.315
        c17.735-10.742,30.492,9.536,30.492,9.536"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M71.212,188.881
        c-1.465-3.883,2.974-7.13,2.974-7.13"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M68.772,177.241
        c0.322,4.857,5.413,4.51,5.413,4.51"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M81.656,190.548
        c2.994-6.181,10.133-4.077,10.133-4.077"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M91.302,177.051
        c-4.746,3.771,0.351,9.111,0.351,9.111"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M77.067,187.915
        c-1.036-5.662,5.606-6.162,5.606-6.162"/>
        <path fill="none" stroke="#912400" stroke-width="0.75" stroke-linecap="round" stroke-miterlimit="10" d="M81.77,174.124
        c-3.976,2.531,1.223,7.305,1.223,7.305"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M376.215,150.347
        c12.384-1.222,14.649,15.486,14.649,15.486"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M377.396,146.714
        c-0.033,2.391,3.37,3.929,3.37,3.929"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M378.479,153.721
        c-0.872-2.868,2.288-3.078,2.288-3.078"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M389.742,151.366
        c-3.007,2.061-1.157,6.849-1.157,6.849"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M383.727,158.195
        c1.54-3.221,4.917,0.167,4.917,0.167"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M384.908,147.962
        c-1.655,2.324,0.438,5.47,0.438,5.47"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M381.146,155.34
        c1.144-3.228,4.201-1.909,4.201-1.909"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M412.682,160.34
        c-11.062-6.625-20.572,6.647-20.572,6.647"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M413.181,156.7
        c-1.025,2.061-4.895,1.843-4.895,1.843"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M409.068,162.207
        c2.087-2.06-0.782-3.664-0.782-3.664"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M399.557,155.117
        c1.906,3.118-1.943,6.38-1.943,6.38"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M402.173,163.669
        c-0.018-3.449-4.68-2.072-4.68-2.072"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M405.591,154.382
        c0.523,2.733-2.829,4.482-2.829,4.482"/>
        <path fill="none" stroke="#912400" stroke-width="0.5" stroke-linecap="round" stroke-miterlimit="10" d="M405.854,162.391
        c0.355-3.276-3.093-3.526-3.093-3.526"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M356.713,491.758
        c40.602,30.727,21.433,87.101,21.433,87.101"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M439.344,655.609
        c-1.944-50.881-58.652-68.071-58.652-68.071"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M480.312,462.202
        c26.45,19.461,12.088,78.564,12.088,78.564"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M565.42,571.406
        c-13.102-30.111-69.77-28.561-69.77-28.561"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M423.514,419.116
        c8.088-36.435-53.418-57.736-53.418-57.736"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M355.334,273.804
        c40.262,17.118,14.918,82.496,14.918,82.496"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M439.756,254.433
        c31.556,14.559,11.724,70.712,11.724,70.712"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M505.875,383.942
        c7.726-36.514-52.773-56.973-52.773-56.973"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M241.745,383.758
        c-40.603,30.727-9.575,92.774-9.575,92.774"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M127.705,509.219
        c33.775-38.952,103.808-22.73,103.808-22.73"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M132.136,366.826
        c-40.575,17.58-18.172,69.029-18.172,69.029"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M34.588,464.406
        c12.661-29.1,78.201-24.14,80.41-23.938"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M261.164,203.47
        c-33.732,15.97-14.147,75.83-14.147,75.83"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M189.367,340.378
        c-4.74-37.02,57.244-53.21,57.244-53.21"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M169.478,183.86
        c-35.375,19.609-18.595,57.946-18.595,57.946"/>
        <path fill="none" stroke="#912400" stroke-linecap="round" stroke-miterlimit="10" d="M101.98,278.879
        c8.643-39.512,46.237-34.001,46.237-34.001"/>
        </svg>
    )
}

export default HomeAnimation;