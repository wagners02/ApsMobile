import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FilmesDetalhesPage } from '../filmes-detalhes/filmes-detalhes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Marty McFly",
    data: "November 5, 1955",
    descricao: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean? !Whoa. This is heavy.",
    qntd_likes: 12,
    qntd_comments: 4,
    data_time_comment: "11h ago"
  }
  public lista_filmes = new Array<any>();
  public page = 1;
  public infiniteScroll;

  public loader;
  public refresher;
  public isRefreshing: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController) {
  }
  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando Filmes!..."
    });
    this.loader.present();
  }
  fechaCarregando() {
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();
  }

  ionViewDidEnter() {
    this.carregarFilmes();
  }
  abrirDetalhes(filme) {
    console.log(filme);
    //this.navCtrl.push(FilmesDetalhesPage, { id: filme.id });
    this.navCtrl.push(FilmesDetalhesPage, { filme: filme });

  }
  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
  }
  carregarFilmes(newPage: boolean = false) {
    console.log('ionViewDidLoad FeedPage');
    this.abreCarregando();
    this.movieProvider.getLatesMovies(this.page).subscribe(
      data => {
        const objeto_retorno = (data as any);

        if(newPage){
          this.lista_filmes = this.lista_filmes.concat(objeto_retorno.results);
          this.infiniteScroll.complete();
        }else{
          this.lista_filmes = objeto_retorno.results;
        }        
        console.log(objeto_retorno);
        this.fechaCarregando();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }, error => {
        console.log(error);
        this.fechaCarregando();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }
    );
  }

}
