import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post/post';

@Component({
  selector: 'post-feed',
  templateUrl: './postFeed.html',
  styleUrl: '../app.css',
  imports: [Post]
})
export class PostFeed {
  constructor(private router: Router) { }

  posts = signal(
    [
      {"id": 1, "description": "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.", "imageUrl": "https://material.angular.dev/assets/img/examples/shiba2.jpg", "userName": "Shiba Inu", "userDescription": "Dog Breed", "imageAlt": "Photo of a Shiba Inu"},
      {"id": 2, "description": "The Airbus A380 is the world's largest passenger aircraft, featuring two full-length decks and advanced technology. It can carry over 850 passengers and offers exceptional comfort, range, and efficiency for long-haul international flights.", "imageUrl": "https://aeromagazine.uol.com.br/media/_versions/airbus-a380-lufthansa-perfil_widelg.jpg", "userName": "Shiba Inu", "userDescription": "Dog Breed", "imageAlt": "Photo of an Airbus 380"},
      {"id": 3, "description": "The Colosseum, located in Rome, is an ancient amphitheater built in 80 AD. It hosted gladiator battles and public events, symbolizing the power of the Roman Empire. Today, it remains a major historical and tourist landmark.", "imageUrl": "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/177493849.jpeg?quality=70&strip=info&w=925&w=636", "userName": "Shiba Inu", "userDescription": "Dog Breed", "imageAlt": "Photo of the Colosseum"},
      {"id": 4, "description": "Electronic games are digital forms of entertainment played on consoles, computers, or mobile devices. They offer interactive experiences across genres like action, strategy, and simulation, engaging players worldwide and shaping modern culture and technology.", "imageUrl": "https://idocode.com.br/wp-content/uploads/2018/06/activity-adult-device-1174746-1.jpg.webp", "userName": "Shiba Inu", "userDescription": "Dog Breed", "imageAlt": "Photo of Video Games"}
    ]
  )
}

