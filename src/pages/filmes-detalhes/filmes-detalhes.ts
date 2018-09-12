import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FilmesDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filmes-detalhes',
  templateUrl: 'filmes-detalhes.html',
  providers: [
    MovieProvider
  ]
})
export class FilmesDetalhesPage {
  public filme;
  //public filmeid;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MovieProvider) {
  }

  ionViewDidEnter() {
    this.filme = this.navParams.get("filme");
    // this.movieProvider.getMoviesDetails(this.filmeid).subscribe(
    //   data=>{
    //     let retorno = (data as any);
    //     this.filme = retorno;
    //     console.log(this.filme);
        
    //   },error=>{
    //     console.error(error);
        
    //   })
  }

}
