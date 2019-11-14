import React from 'react';
import NavBar from '../components/NavBar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import computerImage from '../images/computers.png';

export default class Skills extends React.Component {
    render() {
        return (
            <div>
                <NavBar currentScreen="Skills" />
                
                {/* Start of Jumbotron on Skills Page */}
                <Jumbotron fluid style={{ backgroundImage: `url(${computerImage})`, minHeight: 360, maxHeight: 400, backgroundAttachment: 'fixed' }}>

                    <Grid container direction="column" justify="center" alignItems="center" style={{ marginTop: 24 }}>

                        <Grid item xs={12}>
                            <Typography style={{ color: "white" }} variant='h2' align='center' gutterBottom>My skills.</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="h4" align="center" gutterBottom style={{ color: 'white' }}>
                                I can do a lot you know.
                            </Typography>
                        </Grid>
                    </Grid>

                </Jumbotron>
                {/* End of Jumbotron on Skills Page */}


                
                {/* Start of Skills section on SKills Page */}
                <Typography variant="h4" align="center">MY SKILLS</Typography>

                <Divider variant='middle' style={{ color: '#000', height: 4, marginTop: 40 }} />

                <div>
                    <Typography variant="body1" align="center" style={{marginTop: 40, marginLeft: 40, marginRight: 40, marginBottom: 40}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt incidunt labore delectus impedit blanditiis consectetur cumque exercitationem, tempora beatae iusto et tempore nihil perferendis autem asperiores nulla doloremque expedita vitae, voluptate odio illum laboriosam placeat animi sit! Corporis, perspiciatis vitae.
                    </Typography>

                    <Typography variant="h5" style={{ marginBottom: 20, marginLeft: 80 }}>Web and Fullstack Development</Typography>
                    
                    <Typography variant="body1" style={{ marginLeft: 80, marginRight: 80, marginBottom: 40 }}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero aut laudantium voluptas veniam perferendis, eos aspernatur? Architecto atque veritatis dolorum eaque enim incidunt beatae nam excepturi hic distinctio nemo, fugit inventore quae, corrupti suscipit, magni quasi porro eveniet laborum. Nesciunt, fugit cupiditate dignissimos impedit necessitatibus distinctio saepe esse ut aspernatur incidunt illo cumque illum? Adipisci repellat totam magni quos dignissimos.</Typography>
                    
                    <Typography variant="h5" style={{ marginBottom: 20, marginLeft: 80 }}>Mobile App Development</Typography>

                    <Typography variant="body1" style={{ marginLeft: 80, marginRight: 80, marginBottom: 40 }}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero aut laudantium voluptas veniam perferendis, eos aspernatur? Architecto atque veritatis dolorum eaque enim incidunt beatae nam excepturi hic distinctio nemo, fugit inventore quae, corrupti suscipit, magni quasi porro eveniet laborum. Nesciunt, fugit cupiditate dignissimos impedit necessitatibus distinctio saepe esse ut aspernatur incidunt illo cumque illum? Adipisci repellat totam magni quos dignissimos.</Typography>
                
                    <Typography variant="h5" style={{ marginBottom: 20, marginLeft: 80 }}>Machine Learning and Data Science</Typography>

                    <Typography variant="body1" style={{ marginLeft: 80, marginRight: 80, marginBottom: 40 }}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero aut laudantium voluptas veniam perferendis, eos aspernatur? Architecto atque veritatis dolorum eaque enim incidunt beatae nam excepturi hic distinctio nemo, fugit inventore quae, corrupti suscipit, magni quasi porro eveniet laborum. Nesciunt, fugit cupiditate dignissimos impedit necessitatibus distinctio saepe esse ut aspernatur incidunt illo cumque illum? Adipisci repellat totam magni quos dignissimos.</Typography>
                </div>
                {/* End of skills section on skills page */}

            </div>
        )
    }
}