import css from "../styles/index.css"
import Head from 'next/head';

const image = {
  original: "./static/jarand-lokeland-142660-unsplash.jpg",
  optimized: "./static/jarand-lokeland-142660-unsplash-lqip.jpg",
  svg: "./static/jarand-lokeland-142660-unsplash-sqip.svg"
}

export default class Index extends React.Component {
  render() {
    return (
      <div className="main">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
          <link rel="stylesheet" href="//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css" />
          <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" />
        </Head>
        <div className="container">
          <div className="row">
            <div className="column">
              <h1>Norway</h1>
              <div className="imageContainer" style={{backgroundImage: 
              `url(${image.svg})`}}>
                <img src={image.original} />
              </div>
              <p><a className="button" href="https://unsplash.com/photos/3-MftKobVtg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" style={{width: '100%'}}>Photo by Jarand Løkeland on Unsplash</a></p>
            </div>
          </div>      
        </div>
      </div>
    )
  }
}
