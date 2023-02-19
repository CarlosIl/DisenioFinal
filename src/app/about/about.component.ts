import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  facts = [
    { title: "History and Architecture", content: "The building that today houses the Museo Nacional del Prado was designed by architect Juan de Villanueva in 1785. It was constructed to house the Natural History Cabinet, by orders of King Charles III. However, the building's final purpose - as the new Royal Museum of Paintings and Sculptures - was the decision of the monarch's grandson, King Ferdinand VII, encouraged by his wife Queen Maria Isabel de Braganza.The Royal Museum, soon quickly renamed the National Museum of Paintings and Sculptures and subsequently the Museo Nacional del Prado, opened to the public for the first time in November 1819."},
    { title: "The Bicentenary of the Museo del Prado", content: "The Museo del Prado opened to the public on 19 November 1819 as a Royal Museum of Painting and Sculpture. In 2019, we celebrated our Bicentenary, a commemoration that will reveal the path covered since 1819 until today. On this special occasion, we wanted to reflect on the future and the forthcoming challenges for this and the other great Museums of ancient painting: the need to attract social groups that traditionally are not attracted by the collections, to encourage gender and minority research studies or the challenges caused by overcrowding. Furthermore, for the following years the finalization of the Prado Campus is expected, adding the last building, the Hall of Realms, the old Buen Retiro Palace, an incorporation that will imply a rethinking of the current display of the collections. The activity plan for the bicentenary reinforces the usual programme of the Museo del Prado, insisting on the above mentioned aspects."},
    { title: "Cooperate", content: "The Museo Nacional del Prado is one of the most popular and recognized places in the art world, with 3 million annual visitors and an online presence that exceeds 10 million.\n\nCollaborating with us means contributing to the achievement of our objectives: the conservation and dissemination of a collection that is unique in the world, the development of a museum model in constant renewal and a commitment to the cultural enrichment of society."}
  ]
}
