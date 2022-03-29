import { ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faExpand, faArrowUp, faBug, faArrowCircleRight, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

interface WindowApi {
  closeWindow(): void;
  maximizeWindow(): void;
  reloadWindow(): void;
  debugWindow(): void;
  onTopWindow(): void;
  toggleFullscreenWindow(): void;
}

declare global {
  interface Window {
    api?: WindowApi;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer;

  videos = [
    'Big_Buck_Bunny_720_10s_1MB.mp4',
    'Jellyfish_1080_10s_1MB.mp4',
  ];
  index = 0;

  // Font awesome icons
  faExpand = faExpand;
  faArrowUp = faArrowUp;
  faBug = faBug;
  faArrowCircleRight = faArrowCircleRight;
  faCoffaLongArrowAltRight = faLongArrowAltRight;
  constructor(private router: Router, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.onLoad();
  }

  onLoad() {
    this.renderer.setAttribute(this.videoPlayer.nativeElement, 'src', `/assets/videos/${this.videos[this.index]}`);
    this.videoPlayer.nativeElement.play();
  }

  onVideoEnded() {
    const areVideosRemaining = this.index < this.videos.length - 1;

    this.index += areVideosRemaining ? 1 : 0;

    this.renderer.setAttribute(this.videoPlayer.nativeElement, 'src', `/assets/videos/${this.videos[this.index]}`);
    this.videoPlayer.nativeElement.play();
  }


  onFullscreen() {
    window.api.toggleFullscreenWindow();
  }

  onAlwaysTop() {
    window.api.onTopWindow();
  }

  onDebug() {
    window.api.debugWindow();
  }

  onReload() {
    window.api.reloadWindow();
  }

  onExit() {
    window.api.closeWindow();
  }

}
