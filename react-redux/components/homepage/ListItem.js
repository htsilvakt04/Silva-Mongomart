import React from 'react';

function Items (props) {
   return (
       props.items.map( item => {
           let id = item._id;
           return (
               <div key={id} className="row">
                   <div className="col-md-7">
                       <a href={'/item/' + id}>
                           <img className="img-responsive" src={'/static/' + item.img_url} alt=""/>
                       </a>
                   </div>
                   <div className="col-md-5">
                       <h3><a href={'/item/' + id}>{item.title}</a></h3>
                       <h4>{item.slogan}</h4>
                       <p>{item.description}</p>
                       <a className="btn btn-primary" href={'/item/' + id}>View Product <span className="glyphicon glyphicon-chevron-right"></span></a>
                   </div>
                   <hr/>
               </div>
           )
       })
   )
}
function Pagination(props) {
    let {perPage, currentPage, total} = props;

    let numberOfPages = 1;
    if (total > perPage) {
        numberOfPages = Math.ceil(total / perPage);
    }

    let pages = [];
    for (let i = 1; i <= numberOfPages; i++) {
       pages.push (
            <li key={i} className={currentPage === i ? 'active' : 'inactive'}>
                <a>{i}</a>
            </li>
       )
    }

    return (
        <div className="row text-center">
            <div className="col-lg-12">
                <ul className="pagination">
                    {pages}
                </ul>
            </div>
        </div>
    )
}
class ListItem extends React.Component {
    state = {
        currentPage: 1
    }
    perPage = 5;
    render () {
        let items = [
            {
                _id: 1,
                title: 'Gray Hooded Sweatshirt',
                slogan: 'The top hooded sweatshirt we offer', description: 'Unless you live in a nudist colony, there are moments when the chill you feel demands that you put on something warm, and for those times, there\'snothing better than this sharp MongoDB hoodie. Made of 100% cotton, this machine washable, mid-weight hoodie is all you need to stay comfortable when the temperature drops. And, since being able to keep your vital stuff with you is important, the hoodie features two roomy kangaroo pockets to ensure nothing you need ever gets lost.',
                stars: 0,
                category: 'Apparel',
                img_url: '/img/products/hoodie.jpg',
                price: 29.99,
                reviews: [
                    { name: 'Silva',
                        comment: 'this is a revier',
                        stars: 5,
                        date: 1522496058207 },
                    { name: 'SIlva again',
                        comment: 'How about this one',
                        stars: 4,
                        date: 1522496240325 }
                ]
            },
            {
                _id: 2,
                title: 'Coffee Mug',
                slogan: 'Keep your coffee hot!',
                description: 'A mug is a type of cup used for drinking hot beverages, such as coffee, tea, hot chocolate or soup. Mugs usually have handles, and hold a larger amount of fluid than other types of cup. Usually a mug holds approximately 12 US fluid ounces (350 ml) of liquid; double a tea cup. A mug is a less formal style of drink container and is not usually used in formal place settings, where a teacup or coffee cup is preferred.',
                stars: 0,
                category: 'Kitchen',
                img_url: '/img/products/mug.jpg',
                price: 12.5,
                reviews: [
                    { name: 'Silva',
                        comment: 'this is a revier',
                        stars: 5,
                        date: 1522496058207 },
                    { name: 'SIlva again',
                        comment: 'How about this one',
                        stars: 4,
                        date: 1522496240325 }
                ]
            }
        ];
        let total = items.length;
        let currentPage = this.state.currentPage;

        return (
            <div className="col-md-10">
                <Items items={items} />
                <Pagination total={total} perPage={this.perPage} currentPage={currentPage}/>
                <div style={{textAlign: 'center'}}>
                    <i>{total} Products</i>
                </div>
            </div>
        );
    }
}

export default ListItem;