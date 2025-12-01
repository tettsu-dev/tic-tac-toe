import '../css/games.css';
import Board from '../components/board';

export const metadata = {
  title: '三目並べ',
  description: 'Tic Tac Toe Game Page',
};

export default function GamesPage() {
  return (
    <div>
      <Board />
    </div>
  );
}