import withAuth from '@/utils/withAuth';
import { Auth } from 'aws-amplify';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <button onClick={() => Auth.signOut()}>Sign out</button>
        </div>
    );
};

export default withAuth(Dashboard);
